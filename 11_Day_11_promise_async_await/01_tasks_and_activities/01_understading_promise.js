// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise_resolve = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("the promise is resolved");
  }, 2000);
});

promise_resolve.then(function (message) {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()

const promise_reject = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let e = true;
    if (e) {
      reject("this is the error");
    } else {
      resolve("this is success");
    }
  },2000);
});

promise_reject
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });
