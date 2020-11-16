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

columns.forEach((column) => {
  const absorb = gsap.timeline();
  absorb.fromTo(
    column,
    { opacity: 0.4, y: "50%", scale: 0.5 },
    { opacity: 1, y: "0", scale: 1 }
  );

  absorbScene = new ScrollMagic.Scene({
    triggerElement: column,
    triggerHook: 1,
    reverse: true,
  })

    .setTween(absorb)
    .addTo(controller);
});

const navButton = document.querySelector(".navbar-toggler");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("toggle");
});
