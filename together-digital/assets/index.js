// const prev = document.querySelector(".prev-btn");
// const next = document.querySelector(".next-btn");
// const images = document.querySelectorAll(".slider-col img");
// const amount = 100;
// var initialPrev = 0;
// var initialNext = 0;
// function nextSlide() {
//   initialNext -= amount;
//   let val = initialNext - initialPrev;
//   images.forEach((img) => {
//     img.style.transform = "translatex(-" + val + "%)";
//   });
//   console.log(initialNext);
// }
// function previousSlide() {
//   initialPrev += amount;
//   let val = initialNext - initialPrev;
//   images.forEach((img) => {
//     img.style.transform = "translatex(" + val + "%)";
//   });
//   console.log(initialPrev);
// }

// next.addEventListener("click", nextSlide);
// prev.addEventListener("click", previousSlide);
const collapses = document.querySelectorAll(".collapse");
function active() {
  setInterval(function () {
    collapses.forEach((c, index) => {
      if (c.classList.contains("show")) {
        let element = c.parentElement.children[0].children[0].children[1];
        element.children[0].style.display = "none";
        element.children[1].style.display = "block";
      } else {
        let element = c.parentElement.children[0].children[0].children[1];
        element.children[0].style.display = "block";
        element.children[1].style.display = "none";
      }
    });
  }, 0);
}

active();
