const tabButtons = document.querySelectorAll(".tablinks");
const tabPanels = document.querySelectorAll(".tab-content");

showTab("Profile");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.innerHTML;
    showTab(tabId);
  });
});

function showTab(tabId) {
  tabPanels.forEach((panel) => {
    panel.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
  tabButtons.forEach((button) => {
    button.classList.toggle("active-tab", button.innerHTML === tabId);
  });
}
