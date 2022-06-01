let menu = document.querySelector("nav ul");
let menuBar = document.querySelector("nav .menu-icon");
let iconMenu = document.querySelector("nav .menu-icon img");

menuBar.addEventListener("click", function () {
  if (iconMenu.getAttribute("src") == "assets/menu.png") {
    iconMenu.setAttribute("src", "assets/close.png");
  } else {
    iconMenu.setAttribute("src", "assets/menu.png");
  }

  menu.classList.toggle("active");
});
