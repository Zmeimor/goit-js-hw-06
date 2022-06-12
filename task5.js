const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
output.textContent = "Anonimus";

textInput.addEventListener("input", (event) => {
    event.preventDefault();
    console.log(event.currentTarget.value);
   output.textContent = event.currentTarget.value; 
});