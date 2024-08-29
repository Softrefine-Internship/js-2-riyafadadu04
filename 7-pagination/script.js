const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageButtons = document.querySelectorAll('.page-btn');
const pageContent = document.querySelector('.page-content');

let currentPage = 3; 
showPageContent(currentPage);

prevBtn.addEventListener('click', () => {
    currentPage = Math.max(currentPage - 1, 1);
    showPageContent(currentPage);
});

nextBtn.addEventListener('click', () => {
    currentPage = Math.min(currentPage + 1, 5);
    showPageContent(currentPage);
});

pageButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentPage = parseInt(btn.innerHTML);
        showPageContent(currentPage);
    });
});

function showPageContent(page) {
    pageContent.textContent = `Content for Page ${page}`;
    pageButtons.forEach((btn) => {
        btn.classList.toggle('active', parseInt(btn.innerHTML) === page);
    });
}
