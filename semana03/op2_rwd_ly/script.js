const navToggle=document.querySelector(".nav__toggle");
const navItems=document.querySelector(".nav__items");

navToggle.addEventListener("click", visible);

function visible(){
    navItems.classList.toggle("nav__items--visible");
}