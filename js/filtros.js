const icono = document.querySelector(".iconoFiltro");
const filtro = document.querySelector(".contenidoFiltros");

icono.addEventListener("click", () => {
    filtro.classList.toggle("mostrarFiltros");
});