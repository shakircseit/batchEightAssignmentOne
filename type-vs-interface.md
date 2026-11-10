# Type Aliases vs. Interfaces in TypeScript

## Introduction

Type aliases and interfaces both describe the shape of data in
TypeScript. They help developers catch mistakes before code runs and
make code easier to understand. Although they often look similar, they
have different capabilities.

## Detailed Explanation

An `interface` is commonly used to describe the structure of an object
or class. Interfaces can be extended with `extends`, and they support
declaration merging. Declaration merging means that TypeScript combines
multiple declarations with the same interface name.

``` typescript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Alice",
  age: 25,
  role: "admin"
};
```

A `type` alias can describe object shapes too, but it can also represent
union types, intersection types, tuples, primitives, and other types.

``` typescript
type Status = "pending" | "approved" | "rejected";

type UserInfo = {
  name: string;
  email: string;
};

type AdminInfo = UserInfo & {
  permissions: string[];
};
```

The key difference is that an interface can be reopened and merged,
while a type alias cannot be redeclared with the same name in the same
scope. Both can be extended or combined, but their syntax differs.

## Conclusion

Choose `interface` when defining object contracts, especially public
APIs or class shapes that may need extension. Choose `type` when you
need unions, intersections, tuples, or more complex type expressions.
For ordinary object shapes, either is valid; consistency within a
project is important.
