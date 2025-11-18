function addItem() {
  let inputElement = document.getElementById("newItemText");
  let liElement = document.createElement("li");
  let itemsListElement = document.getElementById("items");

  liElement.innerHTML = inputElement.value;
  itemsListElement.appendChild(liElement);

  inputElement.value = "";
}

function onInputMouseOver(event) {
  event.target.style.backgroundColor = "black";
  event.target.style.color = 'white';
}
