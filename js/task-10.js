//  - Напиши скрипт створення і очищення колекції елементів.
//  - Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити,
// колекція елементів очищається.

//  - Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

//  1. Розміри найпершого <div> - 30px на 30px.
//  2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//  3. Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.

// - Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesStoreEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

buttonDestroyEl.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const formatedAmount = Number(amount);

  if (formatedAmount < 0 || formatedAmount > 100) {
    return alert("Range from 0 to 100");
  }

  boxesStoreEl.innerHTML = buildBoxes(formatedAmount);
}

function buildBoxes(number) {
  let size = 30;
  const boxList = [];

  for (let i = 0; i < number; i += 1) {
    const boxEl = `
    <div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>
    `;
    size += 10;
    boxList.push(boxEl);
  }

  return boxList.join("");
}

function destroyBoxes() {
  boxesStoreEl.innerHTML = "";
}
