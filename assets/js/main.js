const $menuButton = document.getElementById("menu-button");
const $menuList = document.getElementById("menu-list");

$menuButton.addEventListener("click", () => $menuList.classList.toggle("open"));
