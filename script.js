function changeText(text) {
  document.querySelector("h1").textContent = text;
}

document.querySelector("#darkmode").addEventListener("click", function() {
  document.body.classList.toggle("dark");s
});

const inputName = document.querySelector("#inputName");
const greetButton = document.querySelector("#greetButton");
const greetResult = document.querySelector("#greetResult");

greetButton.addEventListener("click", function() {
  const name = inputName.value.trim();

  if (name === "") {
    greetResult.innerText = "Name cannot be empty!";
  } else if (name.length < 3) {
    greetResult.innerText = "Name is too short!";
  } else {
    greetResult.innerText = "Hello, " + name + "!";
  }
});
const toggleCard = document.querySelector("#toggleCard");
const card = document.querySelector("#card");

toggleCard.addEventListener("click", function() {
  if (card.style.display === "none") {
    card.style.display = "blok";
    toggleCard.textContent = "Hide Card";
  } else {
    card.style.display = "none";
    toggleCard.textContent = "Show Card";
  }
});
let count = 0;
const counterDisplay = document.querySelector("#counter");

document.querySelector("#increment").addEventListener("click", function() {
  count++;
  counterDisplay.textContent = count;
});

document.querySelector("#decrement").addEventListener("click", function() {
  if (count === 0) {
    document.querySelector("#counterMessage").textContent = "Cannot go below zero!";
  } else {
    count--;
    counterDisplay.textContent = count;
  }
});

document.querySelector("#reset").addEventListener("click", function() {
  count = 0;
  counterDisplay.textContent = count;
});