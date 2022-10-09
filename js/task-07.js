// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = sliderEl.value + "px";

sliderEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
