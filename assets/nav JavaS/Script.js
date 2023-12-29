document.addEventListener("DOMContentLoaded", function () {
    var prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        // Muestra la barra de navegación cuando se desplaza hacia arriba y oculta cuando se desplaza hacia abajo
        document.getElementById("navbar").style.top = (prevScrollPos > currentScrollPos) ? "0" : "-50px";

        prevScrollPos = currentScrollPos;
    };
});
