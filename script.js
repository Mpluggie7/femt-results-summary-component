import data from "./data.json" assert { type: "json" };

const colorBlock = ["red", "yellow", "green", "blue"];

let content = "";
if (data.length === 4) {
  for (let i = 0; i < colorBlock.length; i++) {
    content +=
      '<div class="eachBlock eachBlock_' +
      colorBlock[i] +
      '">' +
      '<div class="type type_' +
      colorBlock[i] +
      '">' +
      '<img src="' +
      data[i].icon +
      '" alt="' +
      data[i].category +
      '" />' +
      "<p>" +
      data[i].category +
      "</p>" +
      "</div>" +
      '<div class="score">' +
      data[i].score +
      " <span>/ 100</span></div>" +
      "</div>";
  }
  document.getElementsByClassName("scoreBlock")[0].innerHTML = content;
}
