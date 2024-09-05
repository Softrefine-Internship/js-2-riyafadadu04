const btn = document.querySelector(".deactive-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");

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
confirmBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener('click', closeModal);

