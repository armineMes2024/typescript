/* ======================================================
  TYPESCRIPT PRACTICE FILE (FIXED)
  50+ TASKS JUNIOR → MID
  Author: Armine
====================================================== */

/* ======================================================
  1️⃣ VARIABLES & BASIC TYPES
====================================================== */
let userName: string = "Armine";
let age: number = 22;
let isStudent: boolean = true;
let scores: number[] = [10, 20, 30];

let user: { name: string; email: string } = {
  name: "Anna",
  email: "anna@mail.com",
};

/* ======================================================
  2️⃣ FUNCTION BASICS
====================================================== */
function sum(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

/* ======================================================
  3️⃣ OPTIONAL & DEFAULT PARAMETERS
====================================================== */
function multiply(a: number, b: number = 2): number {
  return a * b;
}

function createUser(name: string, age?: number) {
  return { name, age };
}

/* ======================================================
  4️⃣ UNION & TYPE GUARDS
====================================================== */
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("String ID:", id);
  } else {
    console.log("Number ID:", id);
  }
}

/* ======================================================
  5️⃣ ARRAYS & TUPLES
====================================================== */
const numberArray: number[] = [1, 2, 3];
const tupleExample: [string, number] = ["Armine", 22];

/* ======================================================
  6️⃣ ENUMS
====================================================== */
enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

const myRole: Role = Role.USER;

/* ======================================================
  7️⃣ INTERFACES
====================================================== */
interface UserInterface {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "Anna",
  email: "anna@mail.com",
};

/* ======================================================
  8️⃣ FUNCTION TYPES
====================================================== */
type MathFunc = (x: number, y: number) => number;

const add: MathFunc = (a, b) => a + b;
const subtract: MathFunc = (a, b) => a - b;

/* ======================================================
  9️⃣ GENERICS BASIC
====================================================== */
function identity<T>(value: T): T {
  return value;
}

/* ======================================================
  🔟 GENERIC CONSTRAINTS
====================================================== */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProperty(user1, "name");

/* ======================================================
  11️⃣ TYPE ALIASES
====================================================== */
type ID = string | number;
let myId: ID = 123;

/* ======================================================
  12️⃣ UTILITY TYPES
====================================================== */
type PartialUser = Partial<UserInterface>;
type PickUser = Pick<UserInterface, "id" | "name">;
type OmitUser = Omit<UserInterface, "email">;

/* ======================================================
  13️⃣ READONLY
====================================================== */
type Config = {
  readonly apiUrl: string;
  readonly timeout: number;
};

const config: Config = {
  apiUrl: "https://api.com",
  timeout: 5000,
};

/* ======================================================
  14️⃣ CLASSES
====================================================== */
class Person {
  constructor(public name: string, public age: number) {}

  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }
}

/* ======================================================
  15️⃣ INHERITANCE
====================================================== */
class Employee extends Person {
  constructor(name: string, age: number, public salary: number) {
    super(name, age);
  }
}

/* ======================================================
  16️⃣ ACCESS MODIFIERS
====================================================== */
class Account {
  protected type = "standard";
  private balance: number;

  constructor(public owner: string, balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

/* ======================================================
  17️⃣ ABSTRACT CLASS
====================================================== */
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

/* ======================================================
  18️⃣ RECURSION
====================================================== */
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function fibonacci(n: number): number {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function sumArray(arr: number[]): number {
  return arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));
}

function reverseString(str: string): string {
  return str.length <= 1 ? str : reverseString(str.slice(1)) + str[0];
}

function getMaxRecursive(arr?: number[]): number {
  if (!arr || arr.length === 0) {
    throw new Error("Array must not be empty");
  }

  if (arr.length === 1) return arr[0];

  const max = getMaxRecursive(arr.slice(1));
  return arr[0] > max ? arr[0] : max;
}

/* ======================================================
  19️⃣ FLATTEN ARRAY (SAFE)
====================================================== */
function flattenArray(arr: unknown[]): unknown[] {
  return arr.reduce<unknown[]>((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenArray(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

/* ======================================================
  20️⃣ DISCRIMINATED UNIONS
====================================================== */
type Success = { status: "success"; data: string[] };
type Failure = { status: "error"; message: string };
type ApiResult = Success | Failure;

function handleApi(result: ApiResult): void {
  result.status === "success"
    ? console.log(result.data)
    : console.error(result.message);
}

/* ======================================================
  21️⃣ GENERIC SEARCH (ES5 SAFE)
====================================================== */
function findById<T extends { id: number }>(arr: T[], id: number): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return arr[i];
  }
  return undefined;
}

/* ======================================================
  22️⃣ FUNCTION OVERLOADING (SAFE)
====================================================== */
function concat(a: string, b: string): string;
function concat(a: number, b: number): number;
function concat(a: string | number, b: string | number): string | number {
  if (typeof a === "string" || typeof b === "string") {
    return String(a) + String(b);
  }
  return a + b;
}

/* ======================================================
  23️⃣ FIZZBUZZ (RECURSION)
====================================================== */
function fizzBuzz(n: number): string[] {
  if (n === 0) return [];
  const result = fizzBuzz(n - 1);
  result.push(
    n % 15 === 0 ? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : `${n}`
  );
  return result;
}

/* ======================================================
  24️⃣ SAFE OBJECT SEARCH (ES5 SAFE)
====================================================== */
function findValueByKey(obj: Record<string, unknown>, key: string): unknown {
  if (key in obj) return obj[key];

  const keys = Object.keys(obj); // ES5 safe
  for (let i = 0; i < keys.length; i++) {
    const value = obj[keys[i]];
    if (typeof value === "object" && value !== null) {
      const result = findValueByKey(value as Record<string, unknown>, key);
      if (result !== undefined) return result;
    }
  }

  return undefined;
}

/* ======================================================
  25️⃣ CONDITIONAL TYPES
====================================================== */
type IsString<T> = T extends string ? "Yes" : "No";

/* ======================================================
  26️⃣ TEMPLATE LITERAL TYPES
====================================================== */
type EventName = "click" | "hover";
type PrefixedEvent = `on${Capitalize<EventName>}`;

const event1: PrefixedEvent = "onClick";
const event2: PrefixedEvent = "onHover";

/* ======================================================
  27️⃣ OPTIONAL CHAINING
====================================================== */
type Nested = { a?: { b?: number } };
const nested: Nested = {};
const value = nested.a?.b ?? 0;

/* ======================================================
  28️⃣ SAFE TYPE CONVERSION
====================================================== */
const input = Number("123");

/* ======================================================
  29️⃣ RECORD
====================================================== */
const phoneBook: Record<string, string> = {
  Alice: "123",
  Bob: "456",
};

/* ======================================================
  30️⃣ GENERIC CLASS
====================================================== */
class Store<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
