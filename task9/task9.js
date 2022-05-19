// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.


// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

    const colorOut = document.querySelector(".color");
    const bodyIns = document.querySelector("body");
    const widget = document.querySelector(".widget")


    widget.addEventListener('click', changeColor);

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

  
    function changeColor(event) {
            event.preventDefault();
            let colorNumber = getRandomHexColor();
            bodyIns.style.backgroundColor=colorNumber;
            colorOut.textContent= colorNumber;
    }
    


  
      
    //  colorNumber.addEventListener('click', getRandomHexColor, changeColor)
