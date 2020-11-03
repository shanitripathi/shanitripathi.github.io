var names = ["shani", "tania", "amy", "lee"];

const wrapper = document.querySelector(".wrapper");
const para = document.querySelector(".para");

const printName = (e) => {
  const filter = names.filter((name) => {
    return e.target.innerText !== name;
  });
  event.target.classList.add("disable");
  const chosen = filter[Math.floor(Math.random() * filter.length)];
  names = names.filter((name) => {
    return chosen !== name;
  });
  para.innerText = `you are the secret santa of ${chosen}`;
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", printName);
});
