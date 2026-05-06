// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Typewriter
const text = ["TaraNaSaTeresa", "WEB DEVELOPER", "Portfolio"];
let count = 0;
let index = 0;

(function type() {
    const element = document.querySelector(".typewriter");
    if (!element) return;

    let current = text[count];
    let letter = current.slice(0, ++index);

    element.textContent = letter;

    if (letter.length === current.length) {
        count++;
        index = 0;
        if (count === text.length) count = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 80);
    }
})();

// Scroll reveal
const revealElements = document.querySelectorAll(".about-card, .gallery-card, .timeline-item, .contact-card");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

// Gallery modal (SAFE)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".gallery-card img");
const closeBtn = document.querySelector(".close");

if (modal && modalImg) {
    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });
}

if (closeBtn && modal) {
    closeBtn.onclick = () => modal.style.display = "none";
}

window.addEventListener("click", (e) => {
    if (modal && e.target === modal) {
        modal.style.display = "none";
    }
});

// Skill bars
const bars = document.querySelectorAll(".bar div");

window.addEventListener("load", () => {
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";

        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Hamburger toggle (SAFE)
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

/* SAVE THEME */

const themeBtn =
document.getElementById(
    "theme-toggle"
);

if(localStorage.getItem("theme")
=== "light"){

    document.body.classList.add(
        "light-mode"
    );

    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

    const isLight =
    document.body.classList.contains(
        "light-mode"
    );

    themeBtn.textContent =
    isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

});

// Cursor glow (SAFE)
const glow = document.querySelector(".cursor-glow");

if (glow) {
    document.addEventListener("mousemove", e => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });
}
/* =========================
   COPY EMAIL FUNCTION
========================= */

function copyEmail(){

    const email =
    document.getElementById(
        "emailText"
    ).textContent;

    navigator.clipboard
    .writeText(email);

    const toast =
    document.getElementById(
        "toast"
    );

    const btn =
    document.querySelector(
        ".copy-email-btn"
    );

    toast.classList.add(
        "show"
    );

    btn.innerHTML =
    `
    <span class="btn-text">
        Copied!
    </span>

    <span class="btn-icon">
        ✅
    </span>
    `;

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

        btn.innerHTML =
        `
        <span class="btn-text">
            Copy Email
        </span>

        <span class="btn-icon">
            📋
        </span>
        `;

    }, 2200);

}
/* MAGNETIC CONTACT CARDS */

const contactCards =
document.querySelectorAll(".contact-card");

contactCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left - rect.width / 2;

        const y =
        e.clientY - rect.top - rect.height / 2;

        card.style.transform =
        `
        translateY(-10px)
        rotateY(${x / 18}deg)
        rotateX(${y / -18}deg)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "";

    });

});
/* PROGRESS BAR */

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
        document.documentElement.scrollTop;

        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (scrollTop / height) * 100;

        document.getElementById(
            "progress-bar"
        ).style.width =
        progress + "%";
    }
);