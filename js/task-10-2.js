function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція, яка створює кравдрати в зворотньому порядку.

function createBoxes(amount) {
  const boxList = [];

  for (let i = Number(amount) - 1; i >= 0; i -= 1) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("boxes__item");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.height = `${30 + 10 * i}px`;

    boxList.push(boxEl);
  }

  return boxList;
}

// Функція, яка створює обгортку для масиву квадратів.
// Обгортка створена, щоб при видалені квадратів, робити менше запитів в DOM.

function createBoxStore(number) {
  const createList = createBoxes(number);
  const boxWrapperEl = document.createElement("div");
  boxWrapperEl.classList.add("boxes__wrapper");
  boxWrapperEl.style.width = `${number * 10 + 30}px`;
  boxWrapperEl.style.height = `${number * 10 + 30}px`;
  boxWrapperEl.append(...createList);
  boxesStoreEl.append(boxWrapperEl);
}

function destroyBoxes() {
  boxesStoreEl.firstElementChild.remove();
}

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesStoreEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", () => {
  if (inputEl.value < 0 || inputEl.value > 100) {
    return alert("Range from 0  to 100");
  }
  if (boxesStoreEl.children.length !== 0) {
    destroyBoxes();
  }
  createBoxStore(inputEl.value);
});

buttonDestroyEl.addEventListener("click", destroyBoxes);
