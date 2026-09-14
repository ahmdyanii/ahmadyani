// ==========================================
// PORTOFOLIO AHMAD YANI
// JAVASCRIPT
// ==========================================


// ==========================================
// 1. HAMBURGER MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");


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


// ==========================================
// 2. DROPDOWN PORTOFOLIO DI HP
// ==========================================

if (dropdown && dropdownLink) {

    dropdownLink.addEventListener("click", function (event) {

        if (window.innerWidth <= 950) {

            event.preventDefault();

            dropdown.classList.toggle("open");

        }

    });

}


// ==========================================
// 3. TUTUP MENU SETELAH LINK DIPILIH
// ==========================================

const menuLinks = document.querySelectorAll(
    ".dropdown-menu a, #menu > li:not(.dropdown) > a"
);


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 950) {

            if (menu) {
                menu.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            if (dropdown) {
                dropdown.classList.remove("open");
            }

        }

    });

});


// ==========================================
// 4. RESET MENU SAAT LAYAR DIPERBESAR
// ==========================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 950) {

        if (menu) {
            menu.classList.remove("active");
        }

        if (menuToggle) {

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

        if (dropdown) {
            dropdown.classList.remove("open");
        }

    }

});


// ==========================================
// 5. ANIMASI SAAT SCROLL
// ==========================================

const elemenAnimasi = document.querySelectorAll(
    ".about-card, .mini-card, .skill-card, .project-card, .gallery-item, .contact-left, .contact-form"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elemenAnimasi.forEach(function (elemen) {

        elemen.classList.add("reveal");

        observer.observe(elemen);

    });

} else {

    elemenAnimasi.forEach(function (elemen) {

        elemen.classList.add("show");

    });

}


// ==========================================
// 6. TYPING EFFECT
// ==========================================

const typingText =
    document.getElementById("typing-text");


const daftarTeks = [

    "Mahasiswa Teknik Komputer",
    "Web Developer",
    "Networking Enthusiast"

];


let indexTeks = 0;
let indexHuruf = 0;
let sedangMenghapus = false;


function typingEffect() {

    if (!typingText) {
        return;
    }


    const teksSekarang =
        daftarTeks[indexTeks];


    if (!sedangMenghapus) {

        typingText.textContent =
            teksSekarang.substring(
                0,
                indexHuruf + 1
            );

        indexHuruf++;


        if (indexHuruf === teksSekarang.length) {

            sedangMenghapus = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            teksSekarang.substring(
                0,
                indexHuruf - 1
            );

        indexHuruf--;


        if (indexHuruf === 0) {

            sedangMenghapus = false;

            indexTeks++;


            if (indexTeks === daftarTeks.length) {

                indexTeks = 0;

            }

        }

    }


    const kecepatan =
        sedangMenghapus ? 40 : 80;


    setTimeout(
        typingEffect,
        kecepatan
    );

}


if (typingText) {

    typingText.textContent = "";

    typingEffect();

}


// ==========================================
// 7. DATA PROJECT
// ==========================================

const dataProject = {

    1: {

        title:
            "Laundry Management System",

        category:
            "WEB APPLICATION • MANAGEMENT SYSTEM",

        image:
            "img/project1.jpg",

        description:
            "Aplikasi berbasis web untuk membantu pengelolaan layanan laundry, data pelanggan, pesanan, pembayaran, pengantaran, kurir, serta komplain melalui dashboard admin.",

        technology:
            "HTML • CSS • PHP • MySQL"

    },


    2: {

        title:
            "Dashboard Analisis Kasus & Barang Bukti",

        category:
            "DATA ANALYTICS • DASHBOARD",

        image:
            "img/project2.jpg",

        description:
            "Dashboard interaktif berbasis web untuk menganalisis data kasus dan barang bukti dari file Excel, dilengkapi filter, ringkasan statistik, visualisasi data, dan pencarian.",

        technology:
            "HTML • CSS • JavaScript • Excel"

    },


    3: {

        title:
            "Aplikasi Manajemen Barang",

        category:
            "WEB APPLICATION • INVENTORY",

        image:
            "img/project3.jpg",

        description:
            "Aplikasi berbasis web untuk membantu pengelolaan data barang, stok, status, pencarian, serta pembuatan laporan dalam format PDF dan Excel.",

        technology:
            "HTML • CSS • PHP • MySQL"

    }

};


// ==========================================
// 8. BUKA DETAIL PROJECT
// ==========================================

function bukaProject(id) {

    const project =
        dataProject[id];

    const modal =
        document.getElementById("projectModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalTechnology =
        document.getElementById("modalTechnology");


    if (
        !project ||
        !modal ||
        !modalImage ||
        !modalCategory ||
        !modalTitle ||
        !modalDescription ||
        !modalTechnology
    ) {

        console.log(
            "Modal project belum tersedia di HTML."
        );

        return;

    }


    modalImage.src =
        project.image;

    modalImage.alt =
        project.title;

    modalCategory.textContent =
        project.category;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;

    modalTechnology.innerHTML =
        "<strong>Teknologi:</strong><br>" +
        project.technology;


    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


// ==========================================
// 9. TUTUP DETAIL PROJECT
// ==========================================

function tutupProject() {

    const modal =
        document.getElementById("projectModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


// ==========================================
// 10. KLIK AREA LUAR UNTUK TUTUP MODAL
// ==========================================

const projectModal =
    document.getElementById("projectModal");


if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (event.target === projectModal) {

                tutupProject();

            }

        }
    );

}


// ==========================================
// 11. TOMBOL ESC UNTUK TUTUP MODAL
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains("active")
        ) {

            tutupProject();

        }

    }
);