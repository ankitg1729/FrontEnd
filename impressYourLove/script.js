let lastHeartTime = 0;
const heartThrottleDelay = 100; // delay in milliseconds

// Create a heart on mouse movement with throttling
document.addEventListener("mousemove", function(e) {
  const now = Date.now();
  if (now - lastHeartTime < heartThrottleDelay) return;
  lastHeartTime = now;
  
  let heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Position heart at the cursor location (centered by offset)
  heart.style.left = (e.pageX - 15) + 'px';
  heart.style.top = (e.pageY - 15) + 'px';
  
  document.body.appendChild(heart);
  
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});

// Optional: Create hearts on button click if you want extra burst effects

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  
  function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function musicPlay() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    }
}

// Ensure both functions are triggered when the button is clicked
document.querySelector(".heart-button").addEventListener("click", function () {
    createHearts();
    musicPlay();
});


 
