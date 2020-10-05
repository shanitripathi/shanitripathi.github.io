const hikeButton = document.querySelector(".hike-exp");

window.addEventListener("scroll", hikeScroll);

function hikeScroll() {
  const hikePos = hikeButton.getBoundingClientRect().top;
  const windowHeight = window.innerHeight / 2;
  if (hikePos < windowHeight) {
    hikeButton = "yellow";
  }
}
