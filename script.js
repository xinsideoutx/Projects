const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const menuIcon = document.querySelector(".menu-open");
const navList = document.querySelector(".nav__list");

menuIcon.addEventListener("click", function () {
  navList.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollRev = ScrollReveal({
    origin: "top",
    distance: "85px",
    duration: 2300,
    reset: true,
  });

  scrollRev.reveal(".home__text", { delay: 200 });
  scrollRev.reveal(".home__img", { delay: 300 });

  scrollRev.reveal(".special", { delay: 400 });

  scrollRev.reveal(".about img", {});
  scrollRev.reveal(".about__text", { delay: 150 });

  scrollRev.reveal(".heading-primary", {});
  scrollRev.reveal(".row-btn, .shop-box", { delay: 200 });

  scrollRev.reveal(".reviews__content, .center-text-reviews", { delay: 200 });

  scrollRev.reveal(".contact__content", { delay: 200 });
});
