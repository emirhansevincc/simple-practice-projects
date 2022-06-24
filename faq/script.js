const toggle = document.querySelectorAll(".toggle");

toggle.forEach(x => {
    x.addEventListener("click", () => {
        x.parentNode.classList.toggle("active");
    });
});