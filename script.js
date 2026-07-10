// ================================
// Smooth Scroll
// ================================

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// ================================
// Scroll Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .photo, .promise-card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});

// ================================
// Floating Petals
// ================================

const petals = document.querySelector(".petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-50px";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.opacity = Math.random();
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "999";

    const duration = 6 + Math.random() * 5;

    petal.animate([
        {
            transform: "translateY(0px) rotate(0deg)"
        },
        {
            transform: `translate(${Math.random()*250-125}px, ${window.innerHeight+100}px) rotate(${360+Math.random()*360}deg)`
        }
    ], {
        duration: duration * 1000,
        easing: "linear"
    });

    petals.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);

}

setInterval(createPetal, 600);

// ================================
// Heart Burst
// ================================

const heartBtn = document.getElementById("heartBtn");

if (heartBtn) {

    heartBtn.addEventListener("click", () => {

        for (let i = 0; i < 35; i++) {

            const heart = document.createElement("div");

            heart.innerHTML = ["❤️","💗","💕","🤍"][Math.floor(Math.random()*4)];

            heart.style.position = "fixed";
            heart.style.left = (window.innerWidth / 2) + "px";
            heart.style.top = (window.innerHeight / 2) + "px";
            heart.style.fontSize = (20 + Math.random()*25) + "px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "9999";

            const x = (Math.random()-0.5) * 800;
            const y = (Math.random()-0.5) * 800;

            heart.animate([
                {
                    transform: "translate(0,0) scale(1)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px,${y}px) scale(0.3)`,
                    opacity: 0
                }
            ], {
                duration: 1800,
                easing: "ease-out"
            });

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1800);

        }

    });

}

// ================================
// Photo Hover Glow
// ================================

document.querySelectorAll(".photo").forEach(photo => {

    photo.addEventListener("mouseenter", () => {

        photo.style.boxShadow = "0 20px 50px rgba(255,92,147,.35)";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.boxShadow = "0 15px 35px rgba(0,0,0,.08)";

    });

});

// ================================
// Welcome Fade
// ================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1.2s";
        document.body.style.opacity = "1";

    }, 100);

});