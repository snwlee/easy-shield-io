function logoPreview() {
   let logoName = document.querySelector("#logo-name");
   let bgColor = document.querySelector("#bg-color");
   let logoColor = document.querySelector("#logo-color");
   let genLink =
      "https://img.shields.io/badge/" +
      logoName.value +
      "-" +
      bgColor.value +
      ".svg?&style=for-the-badge&logo=" +
      logoName.value +
      "&logoColor=" +
      logoColor.value;
   let imgClass = document.querySelector(".logo-img");
   imgClass.src = genLink;
}
function openLink() {
   let logoName = document.querySelector("#logo-name");
   let bgColor = document.querySelector("#bg-color");
   let logoColor = document.querySelector("#logo-color");
   let genLink =
      "https://img.shields.io/badge/" +
      logoName.value +
      "-" +
      bgColor.value +
      ".svg?&style=for-the-badge&logo=" +
      logoName.value +
      "&logoColor=" +
      logoColor.value;
   window.open(genLink, "_blank");
}
