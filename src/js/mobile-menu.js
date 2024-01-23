const openMenuButtonEl = document.getElementById("open-menu");
const closeMenuButtonEl = document.getElementById("close-menu");
const menuBackdropEl = document.getElementById("menu");
const menuContent = menuBackdropEl.childNodes;

const openMenu = () => (menuBackdropEl.ariaExpanded = "true");
const closeMenu = () => (menuBackdropEl.ariaExpanded = "false");

openMenuButtonEl.addEventListener("click", openMenu);

closeMenuButtonEl.addEventListener("click", closeMenu);

menuBackdropEl.addEventListener("click", closeMenu);

menuContent.forEach((el) =>
  el.addEventListener("click", (e) => e.stopPropagation())
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 1280) closeMenu();
});
