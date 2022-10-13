// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//   перевіряє його вміст щодо правильної кількості введених символів.

//  - Яка кількість смиволів повинна бути в інпуті,
//    зазначається в його атрибуті data - length.
//  - Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//    якщо неправильна кількість - червоним.
//  - Для додавання стилів використовуй CSS - класи valid і invalid,
//    які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector("#validation-input");
const validClass = "valid";
const invalidClass = "invalid";
const requestedLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", checkValid);

function checkValid(event) {
  const element = event.currentTarget;
  const currentLength = event.currentTarget.value.length;

  element.classList.remove("valid", "invalid");

  return currentLength === requestedLength
    ? element.classList.add("valid")
    : element.classList.add("invalid");
}
