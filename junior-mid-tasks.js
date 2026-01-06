/* ======================================================
  TYPESCRIPT PRACTICE FILE (FIXED)
  50+ TASKS JUNIOR → MID
  Author: Armine
====================================================== */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b;
/* ======================================================
  1️⃣ VARIABLES & BASIC TYPES
====================================================== */
var userName = "Armine";
var age = 22;
var isStudent = true;
var scores = [10, 20, 30];
var user = {
    name: "Anna",
    email: "anna@mail.com",
};
/* ======================================================
  2️⃣ FUNCTION BASICS
====================================================== */
function sum(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello, ".concat(name, "!");
}
/* ======================================================
  3️⃣ OPTIONAL & DEFAULT PARAMETERS
====================================================== */
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
function createUser(name, age) {
    return { name: name, age: age };
}
/* ======================================================
  4️⃣ UNION & TYPE GUARDS
====================================================== */
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id);
    }
    else {
        console.log("Number ID:", id);
    }
}
/* ======================================================
  5️⃣ ARRAYS & TUPLES
====================================================== */
var numberArray = [1, 2, 3];
var tupleExample = ["Armine", 22];
/* ======================================================
  6️⃣ ENUMS
====================================================== */
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
    Role["GUEST"] = "guest";
})(Role || (Role = {}));
var myRole = Role.USER;
var user1 = {
    id: 1,
    name: "Anna",
    email: "anna@mail.com",
};
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
/* ======================================================
  9️⃣ GENERICS BASIC
====================================================== */
function identity(value) {
    return value;
}
/* ======================================================
  🔟 GENERIC CONSTRAINTS
====================================================== */
function getProperty(obj, key) {
    return obj[key];
}
getProperty(user1, "name");
var myId = 123;
var config = {
    apiUrl: "https://api.com",
    timeout: 5000,
};
/* ======================================================
  14️⃣ CLASSES
====================================================== */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return Person;
}());
/* ======================================================
  15️⃣ INHERITANCE
====================================================== */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(Person));
/* ======================================================
  16️⃣ ACCESS MODIFIERS
====================================================== */
var Account = /** @class */ (function () {
    function Account(owner, balance) {
        this.owner = owner;
        this.type = "standard";
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
/* ======================================================
  17️⃣ ABSTRACT CLASS
====================================================== */
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
/* ======================================================
  18️⃣ RECURSION
====================================================== */
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
function sumArray(arr) {
    return arr.length === 0 ? 0 : arr[0] + sumArray(arr.slice(1));
}
function reverseString(str) {
    return str.length <= 1 ? str : reverseString(str.slice(1)) + str[0];
}
function getMaxRecursive(arr) {
    if (!arr || arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    if (arr.length === 1)
        return arr[0];
    var max = getMaxRecursive(arr.slice(1));
    return arr[0] > max ? arr[0] : max;
}
/* ======================================================
  19️⃣ FLATTEN ARRAY (SAFE)
====================================================== */
function flattenArray(arr) {
    return arr.reduce(function (acc, val) {
        if (Array.isArray(val)) {
            acc.push.apply(acc, flattenArray(val));
        }
        else {
            acc.push(val);
        }
        return acc;
    }, []);
}
function handleApi(result) {
    result.status === "success"
        ? console.log(result.data)
        : console.error(result.message);
}
/* ======================================================
  21️⃣ GENERIC SEARCH (ES5 SAFE)
====================================================== */
function findById(arr, id) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === id)
            return arr[i];
    }
    return undefined;
}
function concat(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return String(a) + String(b);
    }
    return a + b;
}
/* ======================================================
  23️⃣ FIZZBUZZ (RECURSION)
====================================================== */
function fizzBuzz(n) {
    if (n === 0)
        return [];
    var result = fizzBuzz(n - 1);
    result.push(n % 15 === 0 ? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : "".concat(n));
    return result;
}
/* ======================================================
  24️⃣ SAFE OBJECT SEARCH (ES5 SAFE)
====================================================== */
function findValueByKey(obj, key) {
    if (key in obj)
        return obj[key];
    var keys = Object.keys(obj); // ES5 safe
    for (var i = 0; i < keys.length; i++) {
        var value_1 = obj[keys[i]];
        if (typeof value_1 === "object" && value_1 !== null) {
            var result = findValueByKey(value_1, key);
            if (result !== undefined)
                return result;
        }
    }
    return undefined;
}
var event1 = "onClick";
var event2 = "onHover";
var nested = {};
var value = (_b = (_a = nested.a) === null || _a === void 0 ? void 0 : _a.b) !== null && _b !== void 0 ? _b : 0;
/* ======================================================
  28️⃣ SAFE TYPE CONVERSION
====================================================== */
var input = Number("123");
/* ======================================================
  29️⃣ RECORD
====================================================== */
var phoneBook = {
    Alice: "123",
    Bob: "456",
};
/* ======================================================
  30️⃣ GENERIC CLASS
====================================================== */
var Store = /** @class */ (function () {
    function Store() {
        this.items = [];
    }
    Store.prototype.add = function (item) {
        this.items.push(item);
    };
    Store.prototype.getAll = function () {
        return this.items;
    };
    return Store;
}());
