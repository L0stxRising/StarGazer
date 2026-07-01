const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const STAR_COUNT = 300;
console.log(canvas);
// Create Stars
for (let i = 0; i < STAR_COUNT; i++) {

    stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    radius: Math.random() * 2 + 0.3,

    opacity: Math.random(),

    speed: Math.random() * 0.003 + 0.001,

    increasing: Math.random() > 0.5,

    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08,

    color: [
        "255,255,255", // White
        "173,216,255", // Blue
        "255,244,214", // Yellow
        "255,220,180", // Orange
        "220,220,255"  // Light Purple
    ][Math.floor(Math.random() * 5)]
});

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {

        // Twinkle
        if (star.increasing) {
            star.opacity += star.speed;

            if (star.opacity >= 1) {
                star.opacity = 1;
                star.increasing = false;
            }
        } else {
            star.opacity -= star.speed;

            if (star.opacity <= 0.15) {
                star.opacity = 0.15;
                star.increasing = true;
            }
        }
        star.x += star.vx*2.5;
        star.y += star.vy*2.5;

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;

        ctx.fill();

    }

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});