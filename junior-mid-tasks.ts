/* ======================================================
  TYPE SCRIPT PRACTICE FILE
  50+ TASKS JUNIOR → MID
  Author: Armine
====================================================== */

/* ======================================================
  1️⃣ VARIABLES & BASIC TYPES
====================================================== */
let userName: string = "Armine"; // string
let age: number = 22;            // number
let isStudent: boolean = true;   // boolean
let scores: number[] = [10, 20, 30]; // array
let user: { name: string; email: string } = { name: "Anna", email: "anna@mail.com" };

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
function printId(id: string | number) {
  if (typeof id === "string") console.log("String ID:", id);
  else console.log("Number ID:", id);
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
  GUEST = "guest"
}

const myRole: Role = Role.USER;

/* ======================================================
  7️⃣ OBJECT TYPES & INTERFACES
====================================================== */
interface UserInterface {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user1: UserInterface = { id: 1, name: "Anna", email: "anna@mail.com" };

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

identity<number>(5);
identity<string>("Armine");

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
  13️⃣ READONLY & IMMUTABILITY
====================================================== */
type Config = {
  readonly apiUrl: string;
  readonly timeout: number;
};

const config: Config = { apiUrl: "https://api.com", timeout: 5000 };

/* ======================================================
  14️⃣ CLASSES & OBJECT ORIENTED
====================================================== */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person1 = new Person("Armine", 22);
person1.sayHello();

/* ======================================================
  15️⃣ CLASS INHERITANCE
====================================================== */
class Employee extends Person {
  salary: number;
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee("Anna", 25, 5000);

/* ======================================================
  16️⃣ ACCESS MODIFIERS
====================================================== */
class Account {
  public owner: string;
  private balance: number;
  protected type: string = "standard";

  constructor(owner: string, balance: number) {
    this.owner = owner;
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
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

function reverseString(str: string): string {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

function getMaxRecursive(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  const maxOfRest = getMaxRecursive(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

/* ======================================================
  19️⃣ NESTED ARRAYS & FLATTEN
====================================================== */
function flattenArray(arr: any[]): any[] {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  return Array.isArray(first)
    ? [...flattenArray(first), ...flattenArray(rest)]
    : [first, ...flattenArray(rest)];
}

/* ======================================================
  20️⃣ DISCRIMINATED UNIONS
====================================================== */
type Success = { status: "success"; data: string[] };
type Failure = { status: "error"; message: string };
type ApiResult = Success | Failure;

function handleApi(result: ApiResult) {
  if (result.status === "success") console.log(result.data);
  else console.error(result.message);
}

/* ======================================================
  21️⃣ MORE ADVANCED GENERICS
====================================================== */
function findById<T extends { id: number }>(arr: T[], id: number): T | undefined {
  return arr.find(item => item.id === id);
}

/* ======================================================
  22️⃣ TUPLE & VARIADIC
====================================================== */
type StringNumberPair = [string, number];

function printPair(pair: StringNumberPair) {
  console.log(`Name: ${pair[0]}, Age: ${pair[1]}`);
}

/* ======================================================
  23️⃣ FUNCTION OVERLOADING
====================================================== */
function concat(a: string, b: string): string;
function concat(a: number, b: number): number;
function concat(a: any, b: any): any {
  return a + b;
}

/* ======================================================
  24️⃣ FIZZBUZZ WITH RECURSION
====================================================== */
function fizzBuzz(n: number): string[] {
  if (n === 0) return [];
  const result = fizzBuzz(n - 1);
  if (n % 15 === 0) result.push("FizzBuzz");
  else if (n % 3 === 0) result.push("Fizz");
  else if (n % 5 === 0) result.push("Buzz");
  else result.push(n.toString());
  return result;
}

/* ======================================================
  25️⃣ NESTED OBJECT SEARCH RECURSION
====================================================== */
function findValueByKey(obj: any, key: string): any {
  if (obj.hasOwnProperty(key)) return obj[key];
  for (const k in obj) {
    if (typeof obj[k] === "object") {
      const result = findValueByKey(obj[k], key);
      if (result !== undefined) return result;
    }
  }
  return undefined;
}

/* ======================================================
  26️⃣ MERGE OBJECTS WITH GENERICS
====================================================== */
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

/* ======================================================
  27️⃣ CONDITIONAL TYPES
====================================================== */
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>; // Yes
type Test2 = IsString<number>; // No

/* ======================================================
  28️⃣ TEMPLATE LITERAL TYPES
====================================================== */
type EventName = "click" | "hover";
type PrefixedEvent = `on${Capitalize<EventName>}`;
const event1: PrefixedEvent = "onClick"; // ✅
const event2: PrefixedEvent = "onHover"; // ✅

/* ======================================================
  29️⃣ OPTIONAL CHAINING & NULLISH
====================================================== */
type Nested = { a?: { b?: number } };
const nested: Nested = { a: { b: 10 } };
const value = nested.a?.b ?? 0;

/* ======================================================
  30️⃣ TYPE ASSERTION
====================================================== */
const input = "123" as unknown as number; // force type (rarely use)

/* ======================================================
  31️⃣ READONLY ARRAYS
====================================================== */
const readonlyArr: readonly number[] = [1, 2, 3];
// readonlyArr.push(4); ❌ Error

/* ======================================================
  32️⃣ RECORD TYPE
====================================================== */
const phoneBook: Record<string, string> = {
  Alice: "123",
  Bob: "456"
};

/* ======================================================
  33️⃣ PARTIAL TYPE
====================================================== */
const partialUser2: Partial<UserInterface> = { name: "Armine" };

/* ======================================================
  34️⃣ PICK & OMIT
====================================================== */
type UserPreview = Pick<UserInterface, "id" | "name">;
type UserNoEmail = Omit<UserInterface, "email">;

/* ======================================================
  35️⃣ NEVER TYPE
====================================================== */
function throwError(message: string): never {
  throw new Error(message);
}

/* ======================================================
  36️⃣ GENERIC ARRAY FLATTEN
====================================================== */
function flattenGeneric<T>(arr: (T | T[])[]): T[] {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  return Array.isArray(first)
    ? [...flattenGeneric(first), ...flattenGeneric(rest)]
    : [first, ...flattenGeneric(rest)];
}

/* ======================================================
  37️⃣ DEEP READONLY
====================================================== */
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const deepObj: DeepReadonly<{ a: { b: number } }> = { a: { b: 10 } };

/* ======================================================
  38️⃣ EXCLUDE & EXTRACT
====================================================== */
type T1 = "a" | "b" | "c";
type T2 = Exclude<T1, "a">; // "b" | "c"
type T3 = Extract<T1, "b" | "c">; // "b" | "c"

/* ======================================================
  39️⃣ NONNULLABLE
====================================================== */
type T4 = string | null | undefined;
type T5 = NonNullable<T4>; // string

/* ======================================================
  40️⃣ TYPE INFERENCE
====================================================== */
const inferred = [1, 2, 3]; // number[] inferred
const inferred2 = { a: 1, b: "hi" }; // {a:number,b:string}

/* ======================================================
  41️⃣ FUNCTION PARAMETERS TYPE INFERENCE
====================================================== */
const addNumbers = (x: number, y: number) => x + y;

/* ======================================================
  42️⃣ CONDITIONAL FUNCTION RETURN
====================================================== */
function checkType<T>(value: T): T extends string ? string : number {
  return (typeof value === "string" ? "string" : 0) as any;
}

/* ======================================================
  43️⃣ GENERIC CLASS
====================================================== */
class Store<T> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
}

/* ======================================================
  44️⃣ MAPPED TYPES WITH GENERICS
====================================================== */
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureOptions = OptionsFlags<{ darkMode: () => void; showAds: () => void }>;

/* ======================================================
  45️⃣ ASYNC FUNCTION WITH GENERICS
====================================================== */
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json() as Promise<T>;
}

/* ======================================================
  46️⃣ PROMISE WITH TYPE
====================================================== */
const p: Promise<number> = new Promise(resolve => resolve(42));

/* ======================================================
  47️⃣ OPTIONAL PARAMETERS + DEFAULTS
====================================================== */
function greetUser(name: string, age: number = 18) {
  return `${name} is ${age} years old`;
}

/* ======================================================
  48️⃣ FUNCTION COMPOSITION
====================================================== */
const double = (x: number) => x * 2;
const square = (x: number) => x * x;

const doubleThenSquare = (x: number) => square(double(x));

/* ======================================================
  49️⃣ CURRYING
====================================================== */
function multiplyCurry(a: number) {
  return function (b: number) {
    return a * b;
  };
}

/* ======================================================
  50️⃣ RECURSIVE OBJECT KEY SEARCH
====================================================== */
const nestedObj = { a: { b: { c: 42 } } };

function searchKey(obj: any, key: string): any {
  if (obj.hasOwnProperty(key)) return obj[key];
  for (const k in obj) {
    if (typeof obj[k] === "object") {
      const res = searchKey(obj[k], key);
      if (res !== undefined) return res;
    }
  }
  return undefined;
}

/* ======================================================
  51️⃣ OPTIONAL CHAINING + NULLISH COALESCING
====================================================== */
const userNested: { profile?: { age?: number } } = {};
const userAge = userNested.profile?.age ?? 0;
