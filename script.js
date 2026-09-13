// ==========================================
// HAMBURGER MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");

// Buka / tutup menu
menuToggle.addEventListener("click", function () {

    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const terbuka = menu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        terbuka
    );
});


// Dropdown Portofolio di HP
dropdownLink.addEventListener("click", function (event) {

    if (window.innerWidth <= 950) {

        event.preventDefault();

        dropdown.classList.toggle("open");
    }
});


// Tutup menu setelah memilih menu
document.querySelectorAll(".dropdown-menu a, #menu > li:not(.dropdown) > a")
.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 950) {

            menu.classList.remove("active");
            menuToggle.classList.remove("active");
            dropdown.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});