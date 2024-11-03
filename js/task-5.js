// Функція для генерації випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи в DOM
const bodyEl = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

// Додаємо обробник події на кнопку
changeColorButton.addEventListener("click", () => {
  // Генеруємо новий випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону <body> та оновлюємо текст у <span> з класом "color"
  bodyEl.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
