const list = document.querySelector(".list");
const menu = document.querySelector(".menu");

list.addEventListener("click", () => {
    menu.classList.toggle("active");
});