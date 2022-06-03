const mesure = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
mesure.addEventListener('change',changeFontSize);
function changeFontSize(event) {
        const textSize = event.currentTarget.value;
        text.setAttribute("style", `font-size:${textSize}px`);
};

