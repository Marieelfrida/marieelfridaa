const burgerIcon = document.querySelector(".burger-icon");
const topMenu = document.querySelector(".top_menu_position");

burgerIcon.addEventListener("click", () => {
  topMenu.classList.toggle("show");
});
