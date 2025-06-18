/*
    Here’s a concise overview of advanced JavaScript concepts to help you level up your skills:

    1. Closures
    Closures allow a function to access variables from its outer scope, even after the outer function has executed.
*/
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureExample = outerFunction('outside');
closureExample('inside'); // Output: Outer: outside, Inner: inside

/*
    2. Promises and Async/Await
    Handle asynchronous operations cleanly with Promises or async/await.

    Using Promises:
 */

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched!'), 1000);
  });
};

fetchData().then(data => console.log(data)); // Output: Data fetched!

/*
  Using Async/Await:
*/
const fetchDataAsync = async () => {
  const data = await fetchData();
  console.log(data); // Output: Data fetched!
};

fetchDataAsync();

/**
 * 3. Currying
  Currying transforms a function with multiple arguments into a series of functions, each taking a single argument.
  This function finishes its work before 2 of the above, because the ones above works in parallel to this one
  */

const multiply = (a) => (b) => (c) => a * b * c;

const result = multiply(2)(3)(4); // Output: 24
console.log(result);

/**
 * 4. Prototypes and Inheritance
  Understand how JavaScript uses prototypes for inheritance.
 */
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.greet(); // Output: Hello, my name is John

/**
 * 5. Modules (ES6)
  Use import and export to organize code into reusable modules.

  Exporting:
 */

import { greet } from './modulo.js';
console.log(greet('Alice')); // Output: Hello, Alice!

/**
 * 6. Event Loop and Asynchronous Behavior
  Understand how the event loop works to handle asynchronous tasks.
 */
console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('End');
// Output: Start, End, Promise, Timeout

/**
 * These concepts are foundational for mastering advanced JavaScript. Let me know if you'd like deeper explanations or examples!
 */