console.log("Script loaded!");
// View Invitation Button

const enterButton = document.getElementById("enterButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const logo = document.querySelector(".welcome-logo");
const music = document.getElementById("bgMusic");

if (enterButton && music) {

    enterButton.addEventListener("click", async () => {

    enterButton.disabled = true;

    logo.style.animation = "logoBurst .8s ease";

    setTimeout(() => {

        welcomeScreen.classList.add("hide");

        mainContent.classList.add("show");

    },600);

    try{

        music.volume = 0;

        await music.play();

        let fade = setInterval(()=>{

            if(music.volume < .95){

                music.volume += .05;

            }else{

                music.volume = 1;

                clearInterval(fade);

            }

        },120);

    }catch(err){

        console.log(err);

    }

});

}   //

const targetDate = new Date("November 14, 2026 17:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

}

updateCountdown();
setInterval(updateCountdown, 1000);

// Luxury Gold Dust

const sparkleContainer = document.querySelector(".sparkles");

for(let i = 0; i < 180; i++){

    const s = document.createElement("div");
    const r = Math.random();

if (r < 0.10){

    s.classList.add("sparkle-star");

}else if(r < 0.30){

    s.classList.add("sparkle-glow");

}

    s.classList.add("sparkle");

    const size = Math.random()*5 + 1;

    s.style.width = size + "px";
    s.style.height = size + "px";

    s.style.left = Math.random()*100 + "%";

    s.style.animationDuration =
    (Math.random()*18 + 18) + "s";

s.style.animationDelay =
    -(Math.random() * 36) + "s";

    s.style.opacity =
        Math.random()*0.45 + 0.25;

        s.style.filter =
`blur(${Math.random()*1.2}px)`;

    sparkleContainer.appendChild(s);

}

// Scroll Fade Animation

const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.05
});

fadeSections.forEach(section=>{

    observer.observe(section);

});