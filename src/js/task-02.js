const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredients = (ingredient) => {
  return ingredient.map((ingredient) => {
    const ingredientsRef = document.createElement("li");
    ingredientsRef.classList.add("item");
    ingredientsRef.textContent = ingredient;
    return ingredientsRef;
  });
};
// const elements = ingredients.map((ingredient) => {
//   const ingredientsRef = document.createElement('li');
//   ingredientsRef.classList.add('item');
//   ingredientsRef.textContent = ingredient;
//   return ingredientsRef;
// });
const elements = makeIngredients(ingredients);
const list = document.querySelector("#ingredients");
list.append(...elements);
