const colors = ["green", "red", "rgba(123,122,200)", "#f15025"];
const backgroundColorText = document.getElementById("backgroundColorText");
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeColor() {
  let randomColor = colors[Math.floor(colors.length * Math.random())];
  document.getElementById("main").style.background = randomColor;
  backgroundColorText.textContent = randomColor;
}

function changeColorHex() {
  hex = "";
  for (let i = 0; i < 6; i++) {
    hex += hexNumbers[Math.floor(hexNumbers.length * Math.random())];
  }
  document.getElementById("main").style.background = "#" + hex;
  backgroundColorText.textContent = "#" + hex;
}
