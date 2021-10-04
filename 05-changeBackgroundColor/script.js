let colors = [
  "#D24D57",
  "#e74c3c",
  "#f1c40f",
  "#2c3e50",
  "#8e44ad",
  "#bdc3c7",
  "#1abc9c",
  "#3498db",
  "#95a5a6",
];

function changeColor() {
  let number = Math.floor(Math.random() * colors.length);
  console.log(number);
  document.body.style.backgroundColor=colors[number];
}