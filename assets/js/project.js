if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
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
    absorb.fromTo(column, { opacity: 0, y: "10%" }, { opacity: 1, y: "0" });

    absorbScene = new ScrollMagic.Scene({
      triggerElement: column,
      triggerHook: 1,
      reverse: false,
    })

      .setTween(absorb)
      .addTo(controller);
  });

  const navButton = document.querySelector(".navbar-toggler");

  navButton.addEventListener("click", () => {
    navButton.classList.toggle("toggle");
  });
} else {
  const navButton = document.querySelector(".navbar-toggler");

  navButton.addEventListener("click", () => {
    navButton.classList.toggle("toggle");
  });
}
