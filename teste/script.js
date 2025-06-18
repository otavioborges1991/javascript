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