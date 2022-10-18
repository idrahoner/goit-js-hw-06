const inputEl = document.querySelector("#name-input");
const nameOutEl = document.querySelector("#name-output");

inputEl.addEventListener("input", validateInput);

function validateInput(event) {
  const inputValue = event.currentTarget.value.trim();

  nameOutEl.textContent = !inputValue ? "Anonymous" : inputValue;
}
