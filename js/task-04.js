let counterValue = 0;
const counterEl = document.querySelector("#value");

const btnDecrement = document.querySelector("[data-action = 'decrement']");
const btnIncrement = document.querySelector("[data-action = 'increment']");

btnDecrement.addEventListener(
  "click",
  () => (counterEl.textContent = counterValue -= 1)
);
btnIncrement.addEventListener(
  "click",
  () => (counterEl.textContent = counterValue += 1)
);
