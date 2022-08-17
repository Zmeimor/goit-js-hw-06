// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const textInput = document.querySelector("#validation-input");

//const output = document.querySelector("#name-output");

textInput.addEventListener('blur', onFillinInput);

function onFillinInput (event) {
    let numberText = event.currentTarget.value.length;
    console.log(numberText);
    // textInput.classList.add("invalid");

    if (event.currentTarget.value.length==textInput.getAttribute("data-length")) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        console.log("ura");
    }     else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    };
};

