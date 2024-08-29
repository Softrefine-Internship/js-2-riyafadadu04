const btn = document.querySelector(".deactive-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close-btn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btn.addEventListener("click", openModal);
closebtn.addEventListener("click", closeModal);
overlay.addEventListener('click', closeModal);
