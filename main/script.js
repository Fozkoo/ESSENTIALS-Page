document.addEventListener("DOMContentLoaded", function () {
    var hamburgerLink = document.getElementById("hamburger-link");
    var menuContain = document.querySelector(".menu-contain");

    hamburgerLink.addEventListener("click", function () {
        // Cambia el estilo del contenedor del menú al hacer clic en el icono del menú
        menuContain.style.display = (menuContain.style.display === "flex") ? "none" : "flex";
    });
});




document.getElementById("closeButton").addEventListener("click", function() {
    // Get the menu-container element
    var menuContainer = document.querySelector(".menu-contain");

    // Toggle the display property
    if (menuContainer.style.display === "none") {
        menuContainer.style.display = "block";
    } else {
        menuContainer.style.display = "none";
    }
});

