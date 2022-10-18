const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = sliderEl.value + "px";

sliderEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
