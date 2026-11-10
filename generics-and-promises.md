# Generics in TypeScript and Asynchronous Promise Responses

## Introduction

Generics allow a function, class, or interface to work with different
data types while preserving type safety. Instead of writing separate
code for strings, numbers, or objects, we can write reusable code with a
type parameter such as `T`.

## Detailed Explanation

Consider a function that returns the value it receives. Without
generics, using `any` would remove useful type checking. A generic
function keeps the input and output types connected.

```typescript
function identity<T>(value: T): T {
  return value;
}

const username = identity<string>("Alice");
const score = identity<number>(95);
```

Here, `T` is a placeholder. TypeScript can often infer it, so
`identity("Alice")` also works.

Generics are especially useful with asynchronous operations. A Promise
represents a value that may become available later. `Promise<T>`
describes the type of the value produced when the Promise is fulfilled.

```typescript
function getUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

async function showUser(): Promise<void> {
  const user = await getUser();
  console.log(user.name);
}
```

The return type `Promise<{ id: number; name: string }>` tells TypeScript
what `await getUser()` will produce. Therefore, TypeScript can check
property access such as `user.name` and report invalid properties during
development.

## Conclusion

Generics make reusable code safer by preserving information about data
types. With `Promise<T>`, they also make asynchronous results
predictable, readable, and easier to maintain.
