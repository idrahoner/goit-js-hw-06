// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"

const inputEl = document.querySelector("#name-input");
const nameOutEl = document.querySelector("#name-output");

inputEl.addEventListener("input", validateInput);

function validateInput(event) {
  const inputValue = event.currentTarget.value.trim();

  nameOutEl.textContent = !inputValue ? "Anonymus" : inputValue;
}
