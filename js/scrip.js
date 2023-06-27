
let abrirMenu = document.getElementById("menu");
let dropdown = document.querySelector(".dropdown");
let cerrarMenu = document.querySelector(".cerrar");

y = window.innerHeight;
x = window.innerWidth;

function openMenu() {
    dropdown.style.display = "block"

}

function closeMenu() {
    dropdown.style.display = "none";

}

abrirMenu.onclick = openMenu;

cerrarMenu.onclick = closeMenu;

// Cerrar el menú cuando se agranda la pantalla
window.addEventListener("resize", function () {
    if (window.innerWidth >= 681) {
        closeMenu();

    }
});

// Cerrar el menú cuando se hace clic fuera del menú
document.addEventListener("click", function(event) {
    const target = event.target;
    if (!target.closest(".dropdown") && !target.closest("#menu")) {
        closeMenu();
    }
});