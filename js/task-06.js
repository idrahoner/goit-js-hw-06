// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//   перевіряє його вміст щодо правильної кількості введених символів.

//  - Яка кількість смиволів повинна бути в інпуті,
//    зазначається в його атрибуті data - length.
//  - Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//    якщо неправильна кількість - червоним.
//  - Для додавання стилів використовуй CSS - класи valid і invalid,
//    які ми вже додали у вихідні файли завдання.

function borderColorSwitcher({ element, validClass, invalidClass } = {}) {
  let inputValue = 0;
  const requestedNumber = Number(element.dataset.length);
  const removeClass = () => {
    element.classList.remove(validClass);
    element.classList.remove(invalidClass);
  };

  element.addEventListener("input", (event) => {
    inputValue = event.currentTarget.value.length;
  });
  element.addEventListener("focus", () => {
    removeClass();
  });
  element.addEventListener("blur", () => {
    if (inputValue === 0) {
      removeClass();
    } else if (inputValue === requestedNumber) {
      element.classList.add(validClass);
    } else {
      element.classList.add(invalidClass);
    }
  });
}

const refs = {
  element: document.querySelector("#validation-input"),
  validClass: "valid",
  invalidClass: "invalid",
};

borderColorSwitcher(refs);
