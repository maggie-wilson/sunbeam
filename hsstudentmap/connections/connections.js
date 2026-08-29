console.log("connections!");
document.getElementById("title").addEventListener("click", () => {
    let newElement = document.createElement("h1")
    newElement.innerHTML = "this is a new element!"
    document.appendChild(newElement);
})