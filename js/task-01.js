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
