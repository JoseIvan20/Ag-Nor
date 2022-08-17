const nav = document.querySelector(".navegacion__items");
const menu = document.querySelector(".bx-menu");

menu.addEventListener("click", () =>{
  nav.classList.toggle("navegacion__items--active");
})
