
let menu = document.getElementById("menu");
let dropdown = document.querySelector(".dropdown");
let cerrarMenu = document.querySelector(".cerrar");
let linkMenu = document.querySelectorAll(".nav-link .link");
let contenedorMensaje = document.getElementById("contenedor-mensaje");
let mensaje = document.getElementById("mensaje");
let btnCerraMensaje = document.getElementById("contmensaje-cerrar");
let btnEnviaMensaje = document.getElementsByClassName(".btn-formulario");

//obtener las dimensiones de la pantalla
y = window.innerHeight;
x = window.innerWidth;

// abrir el menu
function openMenu() {
    dropdown.style.display = "block"
    menu.classList.add("menuActive");

}

// cerrar el menu
function closeMenu() {
    dropdown.style.display = "none";
    menu.classList.remove("menuActive");
}

menu.onclick = openMenu;
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

// mantener linkk activo

linkMenu.forEach(function(link){

    link.addEventListener("click" ,function(e){
        var linkActual = document.querySelector(".active");
        linkActual.classList.remove("active");
        e.target.classList.add("active");
    });

});

// mostra mensaje

mensaje.onclick = function(){
    contenedorMensaje.style.display = "block";
};

btnCerraMensaje.onclick = function(){
    contenedorMensaje.style.display = "none";
};