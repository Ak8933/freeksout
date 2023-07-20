// Generate random stars
function createStar() {
    const starContainer = document.getElementById("dotContainer");
    const star = document.createElement("div");
    star.classList.add("star");
    const isLargeStar = Math.random() < 0.10; // 15% probability for a large star
    star.classList.add(isLargeStar ? "star-large" : "star-small");
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 6}s`;
    starContainer.appendChild(star);
 }
 
 // Generate stars periodically
 setInterval(createStar, 500);
 