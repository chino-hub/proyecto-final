const list = document.querySelector(".list");
const menu = document.querySelector(".menu");

list.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const listGenero = document.querySelector(".busqueda__list");
const genero = Document.querySelector(".mostrar");

listGenero.addEventListener("click", () => {
    genero.classList("genero");
})