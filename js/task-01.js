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

const initialList = document.querySelector("#categories");
const itemsList = Array.from(document.querySelectorAll(".item"));

const showDataItem = (initialList, itemsList) => {
  const numberOfCategories = initialList.children.length;

  const categoriesList = itemsList.map((element) => ({
    textTitle: element.firstElementChild.textContent,
    numberItem: element.lastElementChild.children.length,
  }));

  console.log(`Number of categories: ${numberOfCategories}`);
  categoriesList.forEach(({ textTitle, numberItem }) =>
    console.log(`Category: ${textTitle} \nElements: ${numberItem}`)
  );
};

showDataItem(initialList, itemsList);
