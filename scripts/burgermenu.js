let burgerMenu = document.querySelector("#burgermenu");
let navUl = document.querySelector("#main-nav");

burgerMenu.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

navUl.addEventListener("click", () => {
  navUl.classList.remove("show");
});
