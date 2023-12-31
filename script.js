// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the stars
const stars = [];

// Create a Star class
class Star {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    // Update the star's position
    update() {
        this.x -= this.speed;
        if (this.x < 0) {
            this.x = canvas.width;
        }
    }

    // Draw the star on the canvas
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }
}

// Create stars and add them to the array
for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3;
    const speed = 0.3; // You can change this line to set a custom speed
    const star = new Star(x, y, radius, speed);
    stars.push(star);
}

// Animation loop
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each star
    stars.forEach((star) => {
        star.update();
        star.draw();
    });

    // Call the animation loop recursively
    requestAnimationFrame(animate);
}

// Start the animation
animate();

function check() {
    var date = new Date();
    if (date.getFullYear() === 2024) {
        setTimeout(play, 1000);
    } else {
        document.body.remove();
    }
}

addEventListener("click", () => {
    play();
});

function play() {
    var audio = document.getElementById('audiocont');
    audio.play().catch(function(error) {
        console.log('Failed to play audio:', error);
    });
}