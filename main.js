if (window.location.pathname !== "/project.html") {
  const headerName = document.querySelector(".header-name");

  const text = "Hi, I am Shani!";
  const speed = 50;
  var i = 0;

  function animateHeader() {
    if (i < text.length) {
      headerName.innerHTML += text[i];
      i++;

      setTimeout(animateHeader, speed);
    }
  }

  animateHeader();

  const columns = document.querySelectorAll(".columns");
  const controller = new ScrollMagic.Controller();
  const absorb = gsap.timeline({
    defaults: {
      duration: 0.5,
    },
  });
  columns.forEach((column) => {
    absorb.fromTo(
      column,
      { opacity: 0, y: "10%", scale: 0.3 },
      { opacity: 1, y: "0", scale: 1 }
    );

    absorbScene = new ScrollMagic.Scene({
      triggerElement: column,
      triggerHook: 1,
      reverse: false,
    })

      .setTween(absorb)
      .addTo(controller);
  });
//   function pageAnimation() {
//     const imageCol = document.querySelector(".image-col");
//     const paraCol = document.querySelector(".para-col");
//     const navbarContainer = document.querySelector(".navbar-container");
//     console.log(imageCol);
//     const pageTl = gsap.timeline({
//       defaults: { duration: 1, ease: "easeOut" },
//     });

//     pageTl
//       .fromTo(imageCol, { x: "-200%" }, { x: "0%" })
//       .fromTo(paraCol, { x: "200%" }, { x: "0%" })
//       .fromTo(navbarContainer, { y: "-150%" }, { y: "0%" });
//   }
// }
// pageAnimation();
const navButton = document.querySelector(".navbar-toggler");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("toggle");
});

// barba.init({
//   transitions: [
//     {
//       leave({ current, next }) {
//         const t1 = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         t1.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
//       },
//       enter({ current, next }) {
//         const t1 = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         t1.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//       },
//     },
//   ],
// });
