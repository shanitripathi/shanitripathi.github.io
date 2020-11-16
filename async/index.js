// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.25 });
// gsap.from(".right", { duration: 1, x: "-100vw", ease: "power2.in", delay: 2 });
// gsap.from(".left", { duration: 1, x: "100vw", ease: "power2.in", delay: 2 });

const timeline = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.25 })
  .from(".right", { x: "-100vw", ease: "power2.in" })
  .from(".left", { x: "100vw", ease: "power2.in" }, "<.25");
