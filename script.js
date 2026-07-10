const openBtn = document.getElementById("openBtn");

if (openBtn) {
    openBtn.addEventListener("click", () => {

        const countdown = document.getElementById("countdown");

const y =
    countdown.getBoundingClientRect().top +
    window.pageYOffset -
    120;

window.scrollTo({
    top: y,
    behavior: "smooth"
});
    });
}

// Countdown

const targetDate = new Date("November 14, 2026 17:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    document.getElementById("days").textContent =
        Math.floor(distance/(1000*60*60*24));

    document.getElementById("hours").textContent =
        Math.floor((distance%(1000*60*60*24))/(1000*60*60))
        .toString().padStart(2,"0");

    document.getElementById("minutes").textContent =
        Math.floor((distance%(1000*60*60))/(1000*60))
        .toString().padStart(2,"0");

    document.getElementById("seconds").textContent =
        Math.floor((distance%(1000*60))/1000)
        .toString().padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightboxImage.src = img.src;

        lightbox.classList.add("show");

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


// Scroll Animations

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

fadeElements.forEach(section => {

    observer.observe(section);

});