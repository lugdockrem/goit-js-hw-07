const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();

  nameOutputEl.textContent = trimmedValue || "Anonymous";
});
