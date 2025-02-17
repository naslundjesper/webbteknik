document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    // Klicka på hamburgaren för att visa menyn
    hamburgerMenu.addEventListener("click", function () {
        menuOverlay.classList.toggle("active");
    });

    // Klicka på overlayn för att stänga menyn
    menuOverlay.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
    });
});

