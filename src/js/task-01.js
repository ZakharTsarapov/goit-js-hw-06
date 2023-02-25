const categoriesEl = document.querySelectorAll("li.item");

// const countOfCategoriesRef = categoriesEl.length;

console.log(`Number of categories: ${categoriesEl.length}`);

const categoriesRef = categoriesEl.forEach((el) => {
  const category = el.firstElementChild.textContent;
    const element = el.lastElementChild.children.length;
    
    console.log(`Category: ${category}`);
    console.log(`Elements: ${element}`);
});


