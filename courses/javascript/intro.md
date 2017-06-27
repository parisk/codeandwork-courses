## About JavaScript

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)


## Agenda

* What is JavaScript
* About JavaScript applications
* What JavaScript looks like
* Values, Primitives and Objects
* Prototypes vs. Classes
* Control flow
* Functions


## What is JavaScript

A lightweight, interpreted, programming language.

* It is prototype-based, multi-paradigm and dynamic
* It is known as the scripting language for Web pages
* It is used in non-browser environments also, like Νode.js and CouchDB

[developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## About JavaScript applications

You can build **any type of application** with JavaScript

* Interactive web applications (Browser JavaScript)
* Server applications (Node.js)
* Mobile applications (Ionic)
* Desktop applications (Electron)


## What JavaScript looks like

```javascript
var name = 'Paris';
let age = 25;
const greeting = `Hi, I am ${name} and I am ${age} years old.`;

console.log(greeting);
```


## JavaScript values

In JavaScript we can store values with these statements: `var`, `let` and `const`.

```javascript
var a = 1;  // Declare variable in global scope and initialize it
let b = 2;  // Declare variable in block scope and initialize it
const c = 3;  // Declare constant in block scope and initialize it
```

Values can either be **Primitives** or **Objects**.


## Primitive Values

A **primitive** is data that is not an object and has no methods.

Example primitives: `1`, `"grace"`, `true`, `null`, `undefined`.

Usually primitive vaues are wrapped in objects.


## Object Values

Object refers to a data structure containing data and instructions for working with the data.

Example objects: `new Date()`, `new XMLHTTPRequest"`.


## Prototypes vs. Classes

JavaScript objects are based on Prototypes, instead of Classes.

Prototypes are less powerful, but are much more lightweight entities.


## Control flow - If statements

```javascript
const age = 18;

if (age <= 18) {
  console.log('Not adult');
} else {
  console.log('Adult');
}
```


## Control flow - Switch statement

```javascript
const theAnswerToEverything = 42;

switch theAnswerToEverything{
  case 42:
    console.log('That is right');
    break;
  default:
    console.log('Not right');
    break;
}
```


## Control flow - For loops

```javascript
const stopAt = 42;

for (let counter=0; counter<=stopAt; counter++) {
  console.log(`Counter is ${counter}`);
}
```


## Control flow - While loops

```javascript
const stopAt = 42;
let counter = 0;

while (counter<=stopAt) {
  console.log(`Counter is ${counter}`);
}
```


## Functions

Functions are objects that can also be called.

```javascript
function square(x) {
  return x*x;
}

square(2);
```


## Functions as Constructors

Functions can also act as prototype constructors to create objects.

```javascript
function Car(brand) {
  this.brand = brand;
}

let car = new Car('tesla');

console.log(car.brand);
```


## Anonymous Functions

Functions can also be anonymous -- function name is redundant.

```javascript
let Car = function (brand) {
  this.brand = brand;
}

let car = new Car('tesla');

console.log(Car);
console.log(car);
```


## Thank you 😁
