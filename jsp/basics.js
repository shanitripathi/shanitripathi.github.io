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

// const demo = new Promise((resolve, reject) => {
//   if (Math.random() < 0.5) {
//     resolve("You are above 50%");
//   } else {
//     reject(new Error("you are below 50%"));
//   }
// });

// demo.then(function (res) {
//   console.log(res);
// });

// const res = fetch("https://jsonplaceholder.typicode.com/posts");
// res
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async function kuch() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// }

// kuch();

// const button = document.querySelector(".slider button");
// const slider = document.querySelector(".slider");

// button.addEventListener("click", function () {
//   button.parentElement.classList.toggle("active");
// });

// const pro = new Promise((resolve, reject) => {
//   reject("i will reject");
// });

// pro.then((res) => {
//   console.log(res);
// });
