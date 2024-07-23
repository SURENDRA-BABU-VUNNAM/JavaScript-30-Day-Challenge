// Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

const promise_reject = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let e = true;
    if (e) {
      reject("this is the error");
    } else {
      resolve("this is success");
    }
  }, 2000);
});

promise_reject
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });
