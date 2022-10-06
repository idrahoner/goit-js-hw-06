const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//  - Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//  - Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const galleryEl = document.querySelector(".gallery");

const itemElements = images.map(({ url, alt }) => {
  const newItem = document.createElement("li");
  const newImg = document.createElement("img");

  newItem.classList.add("gallery__item");
  newImg.classList.add("gallery__image");
  newImg.src = url;
  newImg.alt = alt;
  newImg.width = 300;

  newItem.append(newImg);
  return newItem;
});

galleryEl.append(...itemElements);
