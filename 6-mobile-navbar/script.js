const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnNAvIcon = document.querySelector(".btn-mobile-nav i");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  console.log("navigation clicked");
  headerEl.classList.toggle("nav-open");
  btnNAvIcon.classList.toggle("fa-bars");
  btnNAvIcon.classList.toggle("fa-xmark");
});
