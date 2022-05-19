
const outValue = document.querySelector("#value");
console.log(outValue.textContent);

let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonDecrement.addEventListener("click", () => {
    counterValue -=1;
    console.log("Button was decrement");
    if (counterValue>=0) {
        outValue.textContent = counterValue;
      } else {counterValue = 0};
  });
const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonIncrement.addEventListener("click", () => {
    counterValue = counterValue+1;
    console.log("Button was increment");
        outValue.textContent = counterValue;
  });

  