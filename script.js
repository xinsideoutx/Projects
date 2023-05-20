const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const menuIcon = document.querySelector(".menu-open");
const navList = document.querySelector(".nav__list");

menuIcon.addEventListener("click", function () {
  navList.classList.toggle("open");
});
