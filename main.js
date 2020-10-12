const headerName = document.querySelector(".header-name");

const text = "Hi, I am Shani!";
const speed = 50;
var i = 0;

function animateHeader() {
  if (i < text.length) {
    headerName.innerHTML += text[i];
    i++;
    console.log(text[i]);
    setTimeout(animateHeader, speed);
  }
}

animateHeader();
