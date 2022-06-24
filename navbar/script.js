const button = document.querySelector(".toggle");
const links = document.querySelector(".links");

button.addEventListener("click", () => {
    links.classList.toggle("active");
});