const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


textInput.addEventListener("input", (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    if (event.currentTarget.value === "")
    {output.textContent = "Anonymous";
       } else
  {output.textContent = event.currentTarget.value}; 
});