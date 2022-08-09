//Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

"use strict"

const numberCategory = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numberCategory.length}`);

numberCategory.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    const el = element.querySelectorAll("li");
    console.log(`Elements: ${el.length}`);
});
