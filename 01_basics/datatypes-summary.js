//  Primitive Data Types Summary

//  1. Number: Represents both integer and floating-point numbers.
//     Example: 42, 3.14    

//  2. String: Represents a sequence of characters enclosed in single or double quotes.
//     Example: "Hello, World!", 'JavaScript'   

//  3. Boolean: Represents logical values, either true or false.
//     Example: true, false 

//  4. Undefined: Represents a variable that has been declared but not assigned a value.
//     Example: let x; console.log(x); // undefined

//  5. Null: Represents the intentional absence of any object value.
//     Example: let y = null; console.log(y); // null

//  6. Symbol: Represents a unique identifier, often used as object property keys.
//     Example: let sym = Symbol('description');

let user = {
  name: "Yash"
};

let id = Symbol("id");
user[id] = 101;
let anotherId = Symbol("id");

console.log(user); // { name: 'Yash', [Symbol(id)]: 101 }
console.log(user.id); // undefined ❌ (property key is a symbol)
console.log(user[id]); // ✅ 101
console.log(id === anotherId); // false (each symbol is unique)




//  7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.
//     Example: let bigIntNum = 9007199254741991n;

//  Reference Data Types Summary
//  1. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
//     Example: let obj = { name: "Alice", age: 30 };

//  2. Array: An ordered collection of values, which can be of any type.
//     Example: let arr = [1, "two", true, null];

//  3. Function: A block of reusable code that can be called with arguments to perform a specific task.
//     Example: function greet(name) { return "Hello, " + name; }

//  4. Date: Represents a specific point in time, including date and time information.
//     Example: let date = new Date();

//  5. RegExp: Represents a regular expression, used for pattern matching within strings.
//     Example: let regex = /ab+c/;

//  6. Map: A collection of key-value pairs where keys can be of any type.
//     Example: let map = new Map(); map.set('key', 'value');
//  7. Set: A collection of unique values, where each value can be of any type.
//     Example: let set = new Set(); set.add(1); set.add(2); set.add(2); // duplicate, will be ignored

// Note: JavaScript is a dynamically typed language, meaning that variables can hold values of any type and types can change at runtime. > 0);  // false
//console.log(null == 0);



// *********** typeof **************
// 🧠 typeof Operator in JavaScript (Simple Explanation)
//
// typeof is used to check the type of a value.
//
// ─────────────────────────────────────────────
// Type of value        → typeof result
// ─────────────────────────────────────────────
//
// undefined            → "undefined"
// null                 → "object"     // ⚠️ bug in JS, should’ve been "null"
// boolean (true/false) → "boolean"
// number (123, 4.5)    → "number"
// string ("hello")     → "string"
// object ({}, [], etc) → "object"
// function             → "function"   // special type of object
//
// ─────────────────────────────────────────────
//
// Example:
//
// console.log(typeof undefined); // "undefined"
// console.log(typeof null);      // "object" (weird JS quirk)
// console.log(typeof true);      // "boolean"
// console.log(typeof 42);        // "number"
// console.log(typeof "hi");      // "string"
// console.log(typeof {});        // "object"
// console.log(typeof function(){}); // "function"
//
// 💡 Note:
// - typeof null → "object" is a known historical bug in JavaScript.
// - Functions are a special type of object, so typeof gives "function".
// - typeof never throws an error, even for undeclared variables.
 