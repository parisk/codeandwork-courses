## The syntax of JavaScript

Paris Kasidiaris

[@pariskasid](https://twitter.com/pariskasid) / [paris@sourcelair.com](mailto:paris@sourcelair.com)


## Agenda

* Intro
* Variables
* Control flow
* Functions
* Anonymous functions
* Objects


## Intro

JavaScript uses a C-like syntax, like Java and C#.

```javascript
var name = 'Slim Shady';

// Output 5 times: My name is jigga-jigga Slim Shady.
for (var i=0; i<5; i++) {
  console.log('My name is jigga-jigga ' + name + '.');
}
```


## Variables

Variables are symbolic names for values in your application.

Variables are declared with the `var` keyword (e.g. `var n = 5;`).

```javascript
var n;
console.log('The value of n is ' + n); // The value of n is undefined

n = 5;
console.log('The value of n is ' + n); // The value of n is 5
```

[coding-bootcamp.pkasid.com/exercises/javascript/1_vars/](http://coding-bootcamp.pkasid.com/exercises/javascript/1_vars/)
[developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variables)


## Control flow (if statement)

```javascript
var age = 25;

if (age >= 0 && < 18) {
  console.log('Underage');
} else if (age >= 18) {
  console.log('Adult')
} else {
  console.log('Wow!')
}
```

[coding-bootcamp.pkasid.com/exercises/javascript/2_control_flow_if/](http://coding-bootcamp.pkasid.com/exercises/javascript/2_control_flow_if/)
[developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)


## Control flow (loops)

```javascript
var i;

for (i=0; i<10; i++) {
  console.log(i);
}

i=0;
while (i<10) {
  console.log(i);
  i++;
}
```

[coding-bootcamp.pkasid.com/exercises/javascript/3_control_flow_loops/](http://coding-bootcamp.pkasid.com/exercises/javascript/3_control_flow_loops/)
[developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)


## Functions

Functions are one of the fundamental building blocks in JavaScript.

A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.

```javascript
function square(x) {
  return x * x;
}
```

[coding-bootcamp.pkasid.com/exercises/javascript/4_functions/](http://coding-bootcamp.pkasid.com/exercises/javascript/4_functions/)
[developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)


## Anonymous functions

```javascript
var square = function (x) {
  return x * x;
}

console.log(square);    // function (x) { return x * x; }
console.log(square(2)); // 4

var sq = square;

console.log(sq(2));    // 4
```

[developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)


## Objects

JavaScript is an object-based language based on prototypes instead of classes.

```javascript
// "Object" is a prototype, "myCar" is an object
var myCar = new Object();

// myCar.brand is a property
myCar.brand = "Ford";

// myCar.getBrand is a method
myCar.getBrand = function () {
  return this.brand; // "this" refers to the current object: myCar
}
```

[developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
