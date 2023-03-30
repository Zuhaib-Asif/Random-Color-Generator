let colorCode = document.getElementById("color-code");
let btn = document.getElementById("btn");

function getcolor() {
  let random = Math.floor(Math.random() * 16777215);
  let randomColor = "#" + random.toString(16);
  document.body.style.backgroundColor = randomColor;
  colorCode.innerText = randomColor;
  navigator.clipboard.writeText(randomColor);
}

btn.addEventListener("click", getcolor);
getcolor();
