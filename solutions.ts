export {};
function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
}

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

function formatCoordinate(coordinate: [number, number, string]): string {
  const [lat, long, location] = coordinate;
  return `"Location:${location} ${lat} ${long}"`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((res, currentArray) => {
    return res.concat(currentArray);
  }, [] as T[]);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    ((this.name = name), (this.baseSalary = baseSalary));
  }
  getDetails(): string {
    return `"Employee: ${this.name} Base Salary: ${this.baseSalary}"`;
  }
}
class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `"Manager of ${this.department}: ${this.name}"`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  const res = new Promise<string>((res, rej) => {
    if (age >= 18) {
      setTimeout(() => {
        res("Access Granted");
      }, 1000);
    } else {
      rej(new Error("Access Denied: Must be 18 or older"));
    }
  });
  return res;
};
