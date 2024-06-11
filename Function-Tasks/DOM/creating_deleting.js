function modifyLists() {
    let ul1 = document.getElementById("empty-list");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    ul1.appendChild(newItem);

    let ul2 = document.getElementById("new-list");
    if (ul2.firstElementChild) {
        ul2.removeChild(ul2.firstElementChild);
    }
}
