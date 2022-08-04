const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const loadColor = (colorList) => {
  let html = "";
  for (let color of colorList) {
    // console.log("color", color);
    html += `
    <button class="color-button ${color}" onclick="loadHouse('${color}')"></button>
    `;
  }
  document.querySelector("#colorContainer").innerHTML = html;
};
loadColor(colorList);
const loadHouse = (value) => {
  let element = document.getElementById("house");
  element.classList.add(value);
  let getClass = document.getElementById("house").className;
  let arrr = getClass.split(" ");

  for (let color of arrr) {
    color == value
      ? element.classList.add("house", value)
      : element.classList.remove(color);
  }
};
