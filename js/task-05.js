// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"

const inputEl = document.querySelector("#name-input");
const nameOutEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameOutEl.textContent = "Anonymous";
  } else {
    nameOutEl.textContent = event.currentTarget.value;
  }
});
