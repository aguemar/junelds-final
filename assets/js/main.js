const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");

const toggleNavMenu = () => {
  navMenu.classList.toggle("active");
};

navOpen.addEventListener("click", toggleNavMenu);
navClose.addEventListener("click", toggleNavMenu);
