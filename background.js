const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = 'background-image.jpg'; 

let xPos = canvas.width; // Start image off-screen to the right
const imageWidth = 1024; // Replace with actual image width

function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, xPos, 0, imageWidth, canvas.height);
}

function update() {
    xPos -= 1; // Adjust speed as needed

    // Reset image position when it goes off-screen
    if (xPos <= -imageWidth) {
        xPos = canvas.width; 
    }
}

function animate() {
    requestAnimationFrame(animate);
    update();
    drawBackground();
}

// Ensure image is loaded before starting animation
backgroundImage.onload = () => {
    animate();
};