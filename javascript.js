/* =========================================================
   PANCHAM SINGH PORTFOLIO
   JavaScript
========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* Close mobile menu when clicking a link */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= TYPING ANIMATION ================= */

const typingText = document.getElementById("typingText");

const roles = [

    "DevOps Engineer",
    "AWS Cloud Enthusiast",
    "Cloud Engineer",
    "Automation Engineer",
    "Linux Enthusiast"

];

let roleIndex = 0;
let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}


typeEffect();


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* ================= SCROLL TO TOP ================= */

const scrollTopBtn =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");


    if (isLight) {

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    } else {

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .journey-item, .contact-card, .contact-form"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color =
                "#f87171";

            return;

        }


        /*
            This opens the visitor's email application.

            Replace the email address below if needed.
        */

        const recipient =
            "panchamjadon2@gmail.com";


        const mailSubject =
            encodeURIComponent(
                subject
            );


        const mailBody =
            encodeURIComponent(

                `Hello Pancham,

Name: ${name}
Email: ${email}

Message:

${message}`

            );


        window.location.href =
            `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;


        formMessage.textContent =
            "Opening your email application...";

        formMessage.style.color =
            "#4ade80";

    }
);


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


yearElement.textContent =
    new Date().getFullYear();


/* ================= TERMINAL EFFECT ================= */

const terminalOutput =
    document.querySelectorAll(".terminal-output");


terminalOutput.forEach((element, index) => {

    element.style.opacity = "0";

    setTimeout(() => {

        element.style.transition =
            "opacity 0.6s ease";

        element.style.opacity = "1";

    }, 800 + index * 500);

});


/* ================= MOUSE PARALLAX ================= */

const terminal =
    document.querySelector(".terminal-window");


if (
    terminal &&
    window.innerWidth > 900
) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 80;

            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 80;


            terminal.style.transform =
                `rotateY(${x}deg) rotateX(${y}deg)`;

        }
    );

}


/* ================= SMOOTH BUTTON EFFECT ================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            button.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            button.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%c Welcome to Pancham Singh's Portfolio 🚀 ",
    "background: #7c3aed; color: white; padding: 10px; border-radius: 8px; font-size: 14px;"
);

console.log(
    "%c DevOps Engineer | AWS | Docker | Kubernetes | Jenkins ",
    "color: #06b6d4; font-size: 13px;"
);