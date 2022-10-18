const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientItems = ingredients.map((element) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = `${element}`;
  return newItem;
});

const ingredientList = document.querySelector("#ingredients");
ingredientList.append(...ingredientItems);
