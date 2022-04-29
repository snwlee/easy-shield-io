let logoName = document.querySelector("#logo-name");
let bgColor = document.querySelector("#bg-color");
let logoColor = document.querySelector("#logo-color");
let logoStyle = "?&style=for-the-badge&logo=";
let genLink =
  "https://img.shields.io/badge/" +
  logoName.value +
  "-" +
  bgColor.value +
  ".svg" +
  logoStyle +
  logoName.value +
  "&logoColor=" +
  logoColor.value;
let imgClass = document.querySelectorAll(".logo-img");

function changeStylePlastic() {
  logoStyle = "?style=plastic&logo=";
  logoPreview();
}
function logoPreview() {
  genLink =
    "https://img.shields.io/badge/" +
    logoName.value +
    "-" +
    bgColor.value +
    ".svg" +
    logoStyle +
    logoName.value +
    "&logoColor=" +
    logoColor.value;
  imgClass = document.querySelectorAll(".logo-img");
  imgClass[0].src = genLink;
  imgClass[1].src = genLink;
  imgClass[2].src = genLink;
  imgClass[3].src = genLink;
}
function openLink() {
  genLink =
    "https://img.shields.io/badge/" +
    logoName.value +
    "-" +
    bgColor.value +
    ".svg" +
    logoStyle +
    logoName.value +
    "&logoColor=" +
    logoColor.value;
  window.open(genLink, "_blank");
}
