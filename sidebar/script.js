const button = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");

button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});