const display = document.querySelector(".carousel-display");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");
const images = ["img1.jpg", "img2.jpg", "img3.jpg"]; 

let currentImageIndex = 0;
displayImage(currentImageIndex);
const slideInterval = 5000;

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  displayImage(currentImageIndex);
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayImage(currentImageIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentImageIndex = index;
    displayImage(currentImageIndex);
  });
});

function displayImage(index) {
  display.innerHTML = `<img class="images" src="./imgs/${images[index]}">`;
  updateDots(index);
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active-dot", i === index);
  });
}

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayImage(currentImageIndex);
}, slideInterval);
