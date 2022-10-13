// 1. Порахувати і вивести в консоль кількість категорій (li.item).
// 2. Для кожного li.item вивести в консоль тексе заголовку.
// 3. Для кожного li.item порахувати кількість елементів (li).

// ========== Result: =================

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// ==========================================

const itemsList = Array.from(document.querySelectorAll(".item"));

const showDataItem = (itemsList) => {
  const numberOfCategories = itemsList.length;

  console.log(`Number of categories: ${numberOfCategories}`);

  itemsList.forEach((element) => {
    const textTitle = element.firstElementChild.textContent;
    const numberItem = element.lastElementChild.children.length;
    console.log(`Category: ${textTitle} \nElements: ${numberItem}`);
  });
};

showDataItem(itemsList);
