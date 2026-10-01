* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: #05070d;
    color: white;
    overflow-x: hidden;
}


/* =========================
   PARTICULES
========================= */

#particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ffffff;
    border-radius: 50%;
    opacity: 0.35;
    animation: floatParticle linear infinite;
}

@keyframes floatParticle {

    from {
        transform: translateY(100vh);
    }

    to {
        transform: translateY(-10vh);
    }

}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 75px;

    padding: 0 7%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(5, 7, 13, 0.75);
    backdrop-filter: blur(20px);

    border-bottom: 1px solid rgba(255,255,255,0.06);

    z-index: 1000;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 900;
    letter-spacing: 1px;
}

.logo-icon {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: linear-gradient(135deg, #5865f2, #7c3aed);

    box-shadow: 0 0 25px rgba(88,101,242,0.45);
}

.navbar nav {
    display: flex;
    gap: 32px;
}

.navbar nav a {
    color: #aeb4c5;
    text-decoration: none;

    font-size: 14px;
    font-weight: 600;

    transition: 0.25s;
}

.navbar nav a:hover {
    color: white;
}

.nav-button {
    text-decoration: none;

    padding: 11px 20px;

    border-radius: 10px;

    background: #5865f2;
    color: white;

    font-size: 14px;
    font-weight: 700;

    transition: 0.25s;
}

.nav-button:hover {
    transform: translateY(-2px);

    box-shadow:
        0 10px 30px rgba(88,101,242,0.35);
}

.menu-button {
    display: none;

    border: 0;
    background: none;
    color: white;

    font-size: 25px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    padding: 150px 8% 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 80px;

    position: relative;
}

.hero::before {
    content: "";

    position: absolute;

    width: 600px;
    height: 600px;

    left: -200px;
    top: 100px;

    background: #5865f2;

    opacity: 0.12;

    filter: blur(150px);

    border-radius: 50%;

    z-index: -1;
}

.hero-content {
    max-width: 700px;
}

.badge {
    display: inline-flex;

    align-items: center;
    gap: 8px;

    padding: 8px 14px;

    border-radius: 50px;

    background: rgba(88,101,242,0.1);

    border: 1px solid rgba(88,101,242,0.3);

    color: #b9beff;

    font-size: 13px;

    margin-bottom: 25px;
}

.status-dot,
.online-dot {
    width: 8px;
    height: 8px;

    display: inline-block;

    border-radius: 50%;

    background: #23d160;

    box-shadow: 0 0 10px #23d160;
}

.hero h1 {
    font-size: clamp(50px, 7vw, 90px);

    line-height: 0.98;

    letter-spacing: -4px;

    font-weight: 900;

    margin-bottom: 30px;
}

.hero h1 span,
.section-title h2 span,
.join-content h2 span {
    color: #7c83ff;

    text-shadow:
        0 0 30px rgba(88,101,242,0.45);
}

.hero p {
    max-width: 620px;

    color: #aeb4c5;

    font-size: 18px;

    line-height: 1.7;

    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;

    gap: 15px;

    flex-wrap: wrap;
}

.primary-button,
.secondary-button {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    text-decoration: none;

    padding: 15px 25px;

    border-radius: 12px;

    font-weight: 700;

    transition: 0.3s;
}

.primary-button {
    color: white;

    background: linear-gradient(
        135deg,
        #5865f2,
        #7c3aed
    );

    box-shadow:
        0 10px 35px rgba(88,101,242,0.25);
}

.primary-button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 15px 45px rgba(88,101,242,0.4);
}

.secondary-button {
    color: white;

    border: 1px solid rgba(255,255,255,0.1);

    background: rgba(255,255,255,0.04);
}

.secondary-button:hover {
    background: rgba(255,255,255,0.08);
}

.members {
    display: flex;

    align-items: center;

    gap: 15px;

    margin-top: 35px;
}

.avatars {
    display: flex;
}

.avatars span {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: -8px;

    border-radius: 50%;

    background: #171b2b;

    border: 2px solid #05070d;
}

.avatars span:first-child {
    margin-left: 0;
}

.members strong,
.members small {
    display: block;
}

.members strong {
    font-size: 13px;
}

.members small {
    color: #777f94;

    font-size: 12px;

    margin-top: 3px;
}


/* =========================
   DISCORD CARD
========================= */

.discord-card {
    width: 390px;

    padding: 30px;

    border-radius: 25px;

    background:
        linear-gradient(
            145deg,
            rgba(30,35,60,0.85),
            rgba(12,15,25,0.9)
        );

    border: 1px solid rgba(255,255,255,0.08);

    box-shadow:
        0 30px 80px rgba(0,0,0,0.45),
        0 0 70px rgba(88,101,242,0.1);

    animation: floating 5s ease-in-out infinite;
}

@keyframes floating {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }

}

.discord-card-top {
    display: flex;

    align-items: center;

    gap: 15px;
}

.server-icon {
    width: 65px;
    height: 65px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;

    font-size: 30px;

    background:
        linear-gradient(
            135deg,
            #5865f2,
            #7c3aed
        );

    box-shadow:
        0 0 30px rgba(88,101,242,0.3);
}

.discord-card h3 {
    font-size: 20px;
}

.discord-card-top p {
    color: #8d95aa;

    font-size: 12px;

    margin-top: 5px;
}

.server-description {
    color: #aeb4c5;

    line-height: 1.6;

    font-size: 14px;

    margin: 25px 0;
}

.server-stats {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 10px;

    margin-bottom: 25px;
}

.server-stats div {
    padding: 15px 8px;

    text-align: center;

    border-radius: 12px;

    background: rgba(255,255,255,0.04);
}

.server-stats strong,
.server-stats span {
    display: block;
}

.server-stats strong {
    font-size: 17px;
}

.server-stats span {
    color: #777f94;

    font-size: 10px;

    margin-top: 5px;
}

.card-button {
    display: block;

    text-align: center;

    text-decoration: none;

    padding: 14px;

    border-radius: 12px;

    color: white;

    background: #5865f2;

    font-weight: 700;

    transition: 0.25s;
}

.card-button:hover {
    background: #4752c4;
}


/* =========================
   STATS
========================= */

.stats-section {
    padding: 20px 8% 100px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;
}

.stat-box {
    padding: 25px;

    text-align: center;

    border-radius: 18px;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,255,255,0.06);

    transition: 0.3s;
}

.stat-box:hover {
    transform: translateY(-5px);

    background: rgba(88,101,242,0.07);
}

.stat-icon {
    display: block;

    font-size: 24px;

    margin-bottom: 10px;
}

.stat-box strong {
    display: block;

    font-size: 28px;
}

.stat-box p {
    color: #777f94;

    font-size: 12px;

    margin-top: 5px;
}


/* =========================
   SECTIONS
========================= */

.section {
    padding: 100px 8%;
}

.section-title {
    max-width: 700px;

    margin: 0 auto 60px;

    text-align: center;
}

.section-title > span {
    color: #7c83ff;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 3px;
}

.section-title h2 {
    font-size: clamp(35px, 5vw, 55px);

    margin: 15px 0;

    letter-spacing: -2px;
}

.section-title p {
    color: #858da1;

    line-height: 1.7;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.about-card {
    padding: 35px;

    border-radius: 20px;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,255,255,0.06);

    transition: 0.3s;
}

.about-card:hover {
    transform: translateY(-7px);

    border-color: rgba(88,101,242,0.35);
}

.about-icon {
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 15px;

    background: rgba(88,101,242,0.12);

    font-size: 24px;

    margin-bottom: 25px;
}

.about-card h3 {
    margin-bottom: 12px;
}

.about-card p {
    color: #858da1;

    line-height: 1.7;

    font-size: 14px;
}


/* =========================
   FEATURES
========================= */

.features-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.feature-card {
    position: relative;

    padding: 35px;

    border-radius: 20px;

    background: #090c15;

    border: 1px solid rgba(255,255,255,0.06);

    overflow: hidden;

    transition: 0.3s;
}

.feature-card:hover {
    transform: translateY(-7px);

    border-color: rgba(88,101,242,0.35);

    box-shadow:
        0 20px 50px rgba(0,0,0,0.25);
}

.feature-number {
    position: absolute;

    top: 20px;
    right: 25px;

    color: rgba(255,255,255,0.05);

    font-size: 45px;

    font-weight: 900;
}

.feature-icon {
    font-size: 30px;

    margin-bottom: 25px;
}

.feature-card h3 {
    margin-bottom: 12px;
}

.feature-card p {
    color: #858da1;

    font-size: 14px;

    line-height: 1.7;

    margin-bottom: 20px;
}

.feature-tag {
    display: inline-block;

    padding: 6px 10px;

    border-radius: 8px;

    color: #9da3ff;

    background: rgba(88,101,242,0.1);

    font-size: 10px;

    font-weight: 700;
}


/* =========================
   TEAM
========================= */

.team-section {
    background:
        linear-gradient(
            180deg,
            transparent,
            rgba(88,101,242,0.03),
            transparent
        );
}

.team-grid {
    max-width: 900px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.team-card {
    padding: 35px;

    text-align: center;

    border-radius: 20px;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,255,255,0.06);

    transition: 0.3s;
}

.team-card:hover {
    transform: translateY(-5px);
}

.team-avatar {
    width: 80px;
    height: 80px;

    margin: 0 auto 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-size: 35px;

    background:
        linear-gradient(
            135deg,
            #5865f2,
            #7c3aed
        );
}

.team-card p {
    color: #858da1;

    font-size: 13px;

    margin: 8px 0 15px;
}

.team-card span {
    color: #7c83ff;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 1px;
}


/* =========================
   RULES
========================= */

.rules {
    max-width: 900px;

    margin: auto;
}

.rule {
    display: flex;

    gap: 25px;

    padding: 25px;

    margin-bottom: 12px;

    border-radius: 15px;

    background: rgba(255,255,255,0.025);

    border: 1px solid rgba(255,255,255,0.05);
}

.rule > strong {
    color: #5865f2;

    font-size: 18px;
}

.rule h3 {
    margin-bottom: 5px;
}

.rule p {
    color: #858da1;

    font-size: 13px;
}


/* =========================
   JOIN
========================= */

.join-section {
    padding: 120px 8%;
}

.join-content {
    max-width: 900px;

    margin: auto;

    padding: 70px 30px;

    text-align: center;

    border-radius: 30px;

    background:
        radial-gradient(
            circle at center,
            rgba(88,101,242,0.16),
            rgba(88,101,242,0.02) 55%,
            transparent
        );

    border: 1px solid rgba(88,101,242,0.18);
}

.join-icon {
    font-size: 50px;

    margin-bottom: 20px;
}

.join-content h2 {
    font-size: clamp(35px, 5vw, 55px);

    letter-spacing: -2px;

    margin-bottom: 15px;
}

.join-content p {
    max-width: 600px;

    margin: 0 auto 30px;

    color: #858da1;

    line-height: 1.7;
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 50px 8% 25px;

    border-top: 1px solid rgba(255,255,255,0.06);
}

.footer-content {
    display: flex;

    justify-content: space-between;

    gap: 30px;
}

.footer-brand {
    max-width: 300px;
}

.footer-brand p {
    color: #777f94;

    font-size: 13px;

    line-height: 1.6;

    margin-top: 15px;
}

.footer-links {
    display: flex;

    gap: 25px;

    align-items: center;
}

.footer-links a {
    color: #858da1;

    text-decoration: none;

    font-size: 13px;

    transition: 0.2s;
}

.footer-links a:hover {
    color: white;
}

.copyright {
    margin-top: 40px;

    padding-top: 20px;

    text-align: center;

    border-top: 1px solid rgba(255,255,255,0.05);

    color: #555d70;

    font-size: 11px;
}


/* =========================
   ANIMATIONS
========================= */

.reveal {
    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {

    .hero {
        flex-direction: column;

        text-align: center;

        padding-top: 130px;
    }

    .hero-content {
        max-width: 800px;
    }

    .hero p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons,
    .members {
        justify-content: center;
    }

    .discord-card {
        width: min(100%, 390px);
    }

    .features-grid,
    .about-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .stats-section {
        grid-template-columns: repeat(2, 1fr);
    }

}


@media (max-width: 700px) {

    .navbar {
        padding: 0 5%;
    }

    .navbar nav {
        display: none;

        position: absolute;

        top: 75px;
        left: 0;

        width: 100%;

        padding: 20px;

        flex-direction: column;

        align-items: center;

        background: rgba(5,7,13,0.97);

        border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .navbar nav.active {
        display: flex;
    }

    .nav-button {
        display: none;
    }

    .menu-button {
        display: block;

        cursor: pointer;
    }

    .hero {
        padding-left: 5%;
        padding-right: 5%;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .section {
        padding-left: 5%;
        padding-right: 5%;
    }

    .features-grid,
    .about-grid,
    .team-grid {
        grid-template-columns: 1fr;
    }

    .stats-section {
        padding-left: 5%;
        padding-right: 5%;

        grid-template-columns: repeat(2, 1fr);
    }

    .footer-content {
        flex-direction: column;
    }

    .footer-links {
        flex-wrap: wrap;
    }

}


@media (max-width: 450px) {

    .hero h1 {
        font-size: 48px;
    }

    .discord-card {
        padding: 22px;
    }

    .server-stats {
        gap: 5px;
    }

    .stats-section {
        grid-template-columns: 1fr;
    }

}
