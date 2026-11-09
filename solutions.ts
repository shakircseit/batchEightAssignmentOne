function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}

//const x = multiplyValue(7, 0);
//console.log(x);

function processInput(value: number | string | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  } else {
    throw new Error("Invalid input");
  }
}
//console.log(processInput(false));

function formatCoordinate(coordinate: [number, number, string]): string {
  const [lat, long, location] = coordinate;
  return `"Location:${location} ${lat} ${long}"`;
}
//const x = formatCoordinate([22.35, 91.78, "Chittagong"]);
//console.log(x);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((res, currentArray) => {
    return res.concat(currentArray);
  }, [] as T[]);
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
