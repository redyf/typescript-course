/* eslint-disable */
import { strict as assert } from "assert";

// `async/await` allows you to write asynchronous code in a synchronous way.
// The `async` keyword used with a function or closure creates an asynchronous
// context. The `await` keyword can be used inside an asynchronous context to
// wait for a `Promise` to resolve before moving on to the next line of code.
// While waiting, other code outside the function will execute. When the
// promise resolves, the value is returned and assigned to the variable on the
// left side of the `=` sign. This makes it easier to work with asynchronous
// code as you can write code in a more sequential way.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

async function fetchUserData(userId: number): Promise<{ name: string }> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  const data = await response.json();

  return { name: data.name };
}

(async () => {
  try {
    const userData = await fetchUserData(1);
    console.log(userData.name);
  } catch (e) {
    console.error(e);
  }
})();

fetchUserData(1)
  .then((userData) => console.log(userData.name))
  .catch((e) => console.error(e));
