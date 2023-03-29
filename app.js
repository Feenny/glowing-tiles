const board = document.querySelector(".container");
const colors = [
  "#0D3B66",
  "#FFD683",
  "#F4D35E",
  "#EE964B",
  "#F95738",
  "#A9AFEC",
  "#B8D386",
  "#FD96B8",
  "#7DDDCE",
];
const SQUARES_NUMBER = 289;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
