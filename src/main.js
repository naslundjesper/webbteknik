
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

    // Skriveffekten
    const textElement = document.querySelector(".hero-text");
    const text = textElement.textContent;
    textElement.textContent = "";
    let index = 0;

    function skrivText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(skrivText, 50);
        } else {
            textElement.style.borderRight = "none";
        }
    }

    skrivText(); // Startar skrivmaskinseffekten direkt
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop(); // Hämta endast filnamnet
    console.log("Current page:", currentPage);

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop(); // Hämta endast filnamnet från href
        console.log("Link href:", linkHref);

        // Jämför endast filnamn
        if (linkHref === currentPage) {
            link.classList.add("active");
        }
    });

});


