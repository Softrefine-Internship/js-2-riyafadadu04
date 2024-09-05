const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageButtons = document.querySelectorAll('.page-btn');
const pageContent = document.querySelector('.page-content');

const totalPages = pageButtons.length;
let currentPage = 3; 

showPageContent(currentPage);

function initialPageNum() {
  for (let i = 5; i < 9; i++) {
    hide(i);
  }
  for (let i = 1; i < 5; i++) {
    unhide(i);
  }
  dots(9);
  newNum(2);
}

initialPageNum();

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    deactivate(currentPage);
    currentPage++;
    showPageContent(currentPage);
    if (currentPage == 8) {
      newNum(currentPage + 1);
    }
    if (currentPage != totalPages - 1) unhide(currentPage + 1);
    if (currentPage < 7) {
      for (let j = currentPage + 3; j < totalPages - 1; j++) {
        hide(j);
      }
      dots(totalPages - 1);
    }
    if (currentPage >= 4 && currentPage < totalPages - 2) {
      for (let j = currentPage - 1; j > 2; j--) {
        hide(j);
      }
      dots(2);
    }
  }
  buttonActivation();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    deactivate(currentPage);
    currentPage--;
    showPageContent(currentPage);
    if (currentPage == 3) newNum(currentPage - 1);

    unhide(currentPage);

    if (currentPage < 7 && currentPage > 2) {
      for (let j = currentPage + 2; j < totalPages - 1; j++) {
        hide(j);
      }
      dots(totalPages - 1);
    }
    if (currentPage >= 4 && currentPage < totalPages - 4) {
      for (let j = currentPage - 1; j > 2; j--) {
        hide(j);
      }
      dots(2);
    }
  }
  buttonActivation();
});

for (let i = 0; i < pageButtons.length; i++) {
  pageButtons[i].addEventListener("click", () => {
    if (pageButtons[i].textContent != "...") {
      deactivate(currentPage);
      currentPage = i + 1;
      showPageContent(currentPage);
      buttonActivation();
      if (currentPage == totalPages) {
        dots(2);
        for (let j = currentPage - 4; j < totalPages; j++) {
          console.log(j);
          unhide(j);
          newNum(j);
        }
        for (j = currentPage - 4; j > 2; j--) {
          hide(j);
        }
      } else if (currentPage == 1) {
        initialPageNum();
      } else if (currentPage >= 4 && currentPage <= 7) {
        for (let j = currentPage - 1; j > 2; j--) {
          hide(j);
        }
        dots(2);
        dots(9);
        for (let j = currentPage + 2; j < totalPages - 2; j++) {
          hide(j);
        }
        unhide(currentPage + 1);
      } else if (currentPage == 8) {
        for (let j = currentPage - 2; j > 2; j--) {
          hide(j);
        }
        newNum(9);
      }
    }
  });
}

function showPageContent(index) {
  document.querySelector(`.item${index}`).classList.add("active");
  pageContent.textContent = `Content for Page ${index}`;
}

function buttonActivation() {
    if (currentPage == 1) {
      prevBtn.disabled = true;
      prevBtn.classList.add('disable');
      nextBtn.disabled = false;
      nextBtn.classList.remove('disable');
    }
    if (currentPage > 1 && currentPage < totalPages) {
      nextBtn.disabled = false;
      nextBtn.classList.remove('disable');
      prevBtn.disabled = false;
      prevBtn.classList.remove('disable');
    }
    if (currentPage == totalPages) {
      prevBtn.disabled = false;
      prevBtn.classList.remove('disable');
      nextBtn.disabled = true;
      nextBtn.classList.add('disable');
    }
  }

function deactivate(index) {
  document.querySelector(`.item${index}`).classList.remove("active");
}
function hide(index) {
  document.querySelector(`.item${index}`).classList.add("hide");
}

function unhide(index) {
  document.querySelector(`.item${index}`).classList.remove("hide");
}

function dots(index) {
  document.querySelector(`.item${index}`).textContent = "...";
}

function newNum(index) {
  document.querySelector(`.item${index}`).textContent = index;
}

