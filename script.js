const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
    document.querySelector(".countdown").scrollIntoView({
        behavior: "smooth"
    });
});

const targetDate = new Date("November 14, 2026 17:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2,"0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2,"0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);