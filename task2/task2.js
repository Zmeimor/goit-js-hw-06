

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  console.log(ingredients);
  
refs = {
   elemHtml: document.querySelector("#ingredients"),
}

  console.log(refs.elemHtml);
 
    const createElement = (ingredient) => {
    const newEl = document.createElement("li");
      newEl.classList.add("item");
      newEl.textContent = ingredient;
      refs.elemHtml.append(newEl);
    };


    ingredients.forEach((ingredient) => createElement(ingredient));

  

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.