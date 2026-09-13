// ==========================================
// HAMBURGER MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");


// BUKA / TUTUP MENU
if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("active");

        menuToggle.classList.toggle("active");


        const terbuka =
            menu.classList.contains("active");


        menuToggle.setAttribute(
            "aria-expanded",
            terbuka ? "true" : "false"
        );

    });

}


// DROPDOWN PORTOFOLIO DI HP
if (dropdown && dropdownLink) {

    dropdownLink.addEventListener("click", function (event) {

        if (window.innerWidth <= 950) {

            event.preventDefault();

            dropdown.classList.toggle("open");

        }

    });

}


// TUTUP MENU SETELAH MENU DIPILIH
document
    .querySelectorAll(
        ".dropdown-menu a, #menu > li:not(.dropdown) > a"
    )
    .forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth <= 950 &&
                menu &&
                menuToggle
            ) {

                menu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                if (dropdown) {

                    dropdown.classList.remove("open");

                }

            }

        });

    });


// RESET MENU SAAT UKURAN LAYAR DIPERBESAR
window.addEventListener("resize", function () {

    if (
        window.innerWidth > 950 &&
        menu &&
        menuToggle
    ) {

        menu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        if (dropdown) {

            dropdown.classList.remove("open");

        }

    }

});