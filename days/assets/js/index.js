let controller;
let slideScene;
let PageScene;

function animateSlide() {
  controller = new ScrollMagic.Controller();
  const slides = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  slides.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //gsap
    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideT1.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.6");
    slideT1.fromTo(
      nav,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1 },
      "-=0.5"
    );
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.4,
      reverse: false,
    })
      .setTween(slideT1)
      .addTo(controller);
    //new page amination
    const pageT1 = gsap.timeline();
    const nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageT1.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageT1.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageT1.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");

    PageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0,
      duration: "100%",
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageT1)
      .addTo(controller);
  });
}
const mousePos = document.querySelector(".cursor");
const burger = document.querySelector(".burger");
function cursor(e) {
  mousePos.style.top = e.pageY + "px";
  mousePos.style.left = e.pageX + "px";
}

function pageovers(e) {
  const item = e.target;
  if (item.id === "logo" || item.classList.contains("burger")) {
    mousePos.classList.add("nav-active");
  } else {
    mousePos.classList.remove("nav-active");
  }
  if (item.classList.contains("explore")) {
    mousePos.classList.add("explore-active");
    mousePos.innerText = "Tap";
    gsap.to(".title-swipe", 1, { y: "0%" });
  } else {
    mousePos.classList.remove("explore-active");
    mousePos.innerText = "";
    gsap.to(".title-swipe", 1, { y: "100%" });
  }
}
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to("#logo", 0.5, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to("#logo", 0.5, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

window.addEventListener("mouseover", cursor);
window.addEventListener("mouseover", pageovers);
burger.addEventListener("click", navToggle);

animateSlide();
