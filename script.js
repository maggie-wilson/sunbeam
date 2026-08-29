let button = document.querySelector(".button");

function onButtonClick() {
    button.style.color = "blue";
}

button.addEventListener("click", onButtonClick)