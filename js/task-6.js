function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const inputEl = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  const newBoxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    newBoxes.push(boxEl);
    boxSize += 10;
  }

  boxesContainer.append(...newBoxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
