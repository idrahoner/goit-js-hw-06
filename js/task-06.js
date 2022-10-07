function borderColorSwitcher({ element, validClass, invalidClass } = {}) {
  let inputValue = 0;
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
    } else if (inputValue === 6) {
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
