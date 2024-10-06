const middleEl = document.querySelector(".middle");
const box1El = document.querySelector(".box1");
const box2El = document.querySelector(".box2");

const bottomEl = document.querySelector(".bottom");

const moveBottom = () => {
  bottomEl.classList.toggle("move");
};

const changeBox = () => {
  box1El.classList.toggle("active");
  box2El.classList.toggle("active");
};

middleEl.addEventListener("click", changeBox);

bottomEl.addEventListener("click", moveBottom);
