// "use strict";

// const { promises } = require("fs");

// const btn = document.querySelector(".btn-country");
// const countriesCoontainer = document.querySelector(".countries");

// const renderCountry = function (data) {
//   const html = `<article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1000000
//         ).toFixed(1)}m people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>`;

//   var obj = document.createElement("div");
//   obj.innerHTML = html;

//   countriesCoontainer.insertAdjacentElement("beforeend", obj);
//   countriesCoontainer.style.opacity = 1;
// };
// // XML method
// // const countrydata = function (name) {
// //   const request = new XMLHttpRequest();
// //   request.open("GET", `https://restcountries.eu/rest/v2/name/${name}`);
// //   request.send();

// //   request.addEventListener("load", function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     renderCountry(data);
// //     const [neighbours] = data.border;
// //   });
// // };

// // Promises approach
// // first we fetch the api through fetch method

// const getCountryData = function (name) {
//   fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// btn.addEventListener("click", () => {
//   getCountryData("usaca ");
// });

// make a function for reverse geocoding

// function whereAmI(latitude, longitude) {
//   fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.region}, ${data.country}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// whereAmI(52.508, -1836858376813.181);

// create  a simple promise

const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You win");
  } else {
    reject("you lose");
  }
});

lotteryPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
