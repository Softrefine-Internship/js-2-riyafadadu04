const title = document.querySelectorAll(".accordion-title");
const content = document.querySelectorAll(".accordion-content");
const arrow = document.querySelectorAll(".title-arr");

title.forEach((item, index) => {
  item.addEventListener("click", () => {    
    if(item.classList.contains("title-active")){
      console.log("title is active");
      title.forEach((t) => t.classList.remove("title-active"));
      content.forEach((c) => c.classList.remove("active"));
      arrow.forEach((a) => a.classList.remove("rotate"));
    }else{
      title.forEach((t) => t.classList.remove("title-active"));
      content.forEach((c) => c.classList.remove("active"));
      arrow.forEach((a) => a.classList.remove("rotate"));

      item.classList.add("title-active");
      content[index].classList.add("active");
      arrow[index].classList.add("rotate");
    }
    
  });
});

document.getElementById("defaultOpen").click();
