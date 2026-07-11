console.log("Script loaded!");
// View Invitation Button

const enterButton = document.getElementById("enterButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const music = document.getElementById("bgMusic");

if (enterButton && music) {

    enterButton.addEventListener("click", async () => {

        // Fade out the welcome screen
        welcomeScreen.classList.add("hide");

        try {

            music.volume = 0;

            await music.play();

            let fade = setInterval(() => {

                if (music.volume < 0.95) {

                    music.volume += 0.05;

                } else {

                    music.volume = 1;
                    clearInterval(fade);

                }

            }, 120);

        } catch (err) {

            console.log("Music couldn't start:", err);

        }

    });

}

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

for(let i = 0; i < 60; i++){

    const s = document.createElement("div");

    s.classList.add("sparkle");

    const size = Math.random()*4 + 1;

    s.style.width = size + "px";
    s.style.height = size + "px";

    s.style.left = Math.random()*100 + "%";

    s.style.animationDuration =
        (Math.random()*12 + 14) + "s," +
        (Math.random()*2 + 2) + "s";

    s.style.animationDelay =
        (-Math.random()*20) + "s," +
        (-Math.random()*4) + "s";

    s.style.opacity =
        Math.random()*0.6 + 0.15;

    sparkleContainer.appendChild(s);

}