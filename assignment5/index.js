const sections = document.querySelectorAll("section");
let sectionScene;
let controller;
function animation() {
  sections.forEach((section, index, sections) => {
    if (index != 0) {
      const timeline = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
      });
      timeline.fromTo(
        section,

        { opacity: 0, y: "10%", scale: 0.9 },
        { opacity: 1, y: "0%", scale: 1 }
      );
      controller = new ScrollMagic.Controller();
      sectionScene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.8,
        reverse: false,
      })
        .addIndicators()

        .setTween(timeline)
        .addTo(controller);
    }
  });
}

animation();
