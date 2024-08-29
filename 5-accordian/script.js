const title = document.querySelectorAll(".accordion-title");
const content = document.querySelectorAll(".accordion-content");
const arrow = document.querySelectorAll(".title-arr");

title.forEach((item, index) => {
  item.addEventListener("click", () => {
    title[index].classList.toggle("title-active");
    content[index].classList.toggle("active");
    arrow[index].classList.toggle("rotate");
  });
});

document.getElementById("defaultOpen").click();
