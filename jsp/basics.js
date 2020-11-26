// const response = fetch("https://jsonplaceholder.typicode.com/postsbdakjs");
// response
//   .then(function (res) {
//     if (!res.ok) {
//       throw new Error("you are trying to fetch a page ");
//     }
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     return fetch("https://jsonplaceholder.typicode.com/posts/3dqsad");
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     alert(err.message);
//   });

// const promise = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve("I am resolve");
//   }, 2000);
// });

// promise.then((res) => {
//   console.log("i will return the value");
//   console.log(res);
// });

// function wait(seconds) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("I am resolve");
//     }, seconds * 1000);
//   });
// }

// wait(1)
//   .then((res) => {
//     console.log(res);
//     return wait(1);
//   })
//   .then((res) => {
//     console.log(res);
//   });

const demo = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    resolve("You are above 50%");
  } else {
    reject(new Error("you are below 50%"));
  }
});

demo.then(function (res) {
  console.log(res);
});
//   .catch((err) => {
//     console.error(err);
//     return demo;
//   })
//   .then((res) => {
//     console.log(res);
//   });
