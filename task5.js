const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (!textInput.value === null)
{ output.textContent = event.currentTarget.value; }
else 
{ output.textContent = Anonimus }
});