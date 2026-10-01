/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fermer le menu après avoir cliqué sur un lien */

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   ANNÉE AUTOMATIQUE
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   PARTICULES
========================= */

const particlesContainer =
    document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 15 + 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random() * 0.5 + 0.1;

    particlesContainer.appendChild(particle);

}


/* =========================
   COMPTEUR DES STATISTIQUES
========================= */

const counters =
    document.querySelectorAll("[data-number]");

let countersStarted = false;

function startCounters() {

    if (countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.number);

        let current = 0;

        const duration = 1500;

        const increment =
            target / (duration / 16);

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target + (target === 99 ? "" : "+");

                return;

            }

            counter.textContent =
                Math.floor(current);

            requestAnimationFrame(updateCounter);

        }

        updateCounter();

    });

}


/* =========================
   OBSERVER
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounters();

                }

            });

        },
        {
            threshold: 0.3
        }
    );


const statsSection =
    document.querySelector(".stats-section");

if (statsSection) {

    observer.observe(statsSection);

}


/* =========================
   APPARITION DES ÉLÉMENTS
========================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .feature-card, .team-card, .rule, .stat-box"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
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

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   EFFET PARALLAXE
========================= */

const heroCard =
    document.querySelector(".discord-card");

document.addEventListener("mousemove", event => {

    if (!heroCard || window.innerWidth < 900) {
        return;
    }

    const x =
        (window.innerWidth / 2 - event.clientX) / 70;

    const y =
        (window.innerHeight / 2 - event.clientY) / 70;

    heroCard.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================
   RETOUR À LA POSITION
========================= */

document.addEventListener("mouseleave", () => {

    if (heroCard) {

        heroCard.style.transform =
            "translate(0, 0)";

    }

});
