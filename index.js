const list = document.querySelector(".list");
const menu = document.querySelector(".menu");

list.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// mostrar submenu

// const item = document.querySelector(".ul__item");
// const sub = Document.getElementByClass(".sub");


// item.addEventListener("click", () => {
//     sub.classList.toggle("mostrar");
// })

const listGenero = document.querySelector(".busqueda__list");
const genero = Document.querySelector(".mostrar");

listGenero.addEventListener("click", () => {
    genero.classList("genero");
})