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
  const absorb = gsap.timeline({
    defaults: {
      duration: 0.5,
    },
  });
  absorb.fromTo(column, { opacity: 0, y: "10%" }, { opacity: 1, y: "0" });

  absorbScene = new ScrollMagic.Scene({
    triggerElement: column,
    triggerHook: 0.8,
    reverse: false,
  })

    .setTween(absorb)
    .addTo(controller);
});

const navButton = document.querySelector(".navbar-toggler");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("toggle");
});

// function sendEmail(name, email, message) {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "shani.tripathi01@gmail.com",
//     Password: "fewwkhgsrgenpbks",
//     To: "shani.tripathi01@gmail.com",
//     From: "shani.tripathi01gmail.com",
//     Subject: `${name} sent you a message from your portfolio`,
//     Body: `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`,
//   }).then((msg) => {
//     console.log(msg);
//   });
// }

// function fetchDetails() {
//   const form = document.querySelector(".form");
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.querySelector(".name-input").value;
//     const email = document.querySelector(".email-input").value;
//     const message = document.querySelector(".message-input").value;
//     sendEmail(name, email, message);
//   });
// }

// fetchDetails();

// fewwkhgsrgenpbks
