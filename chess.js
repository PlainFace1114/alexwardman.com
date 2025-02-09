//chess puzzles script
const images = ["img/begin.webp", "img/move1-w.webp", "img/move1-b.webp", "img/move2-w.webp", "img/move2-b.webp", "img/mate.webp"];
const buttonTexts = ["White to Move", "Qxd6", "cxd6", "Ba5", "Qb6", "Bxb6#"];
let currentIndex = 0;

function cycleImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("imageDisplay").src = images[currentIndex];
    document.getElementById("cycleButton").textContent = buttonTexts[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("imageDisplay").src = images[currentIndex];
    document.getElementById("cycleButton").textContent = buttonTexts[currentIndex];
}

function resetImage() {
    currentIndex = 0;
    document.getElementById("imageDisplay").src = images[currentIndex];
    document.getElementById("cycleButton").textContent = buttonTexts[currentIndex];
}
