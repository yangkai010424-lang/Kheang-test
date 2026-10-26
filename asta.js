
const stars = document.getElementById("stars");
const particles = document.getElementById("particles");
const button = document.getElementById("magicButton");
const name = document.getElementById("name");

// ✨ Change your name here
name.textContent = "YOUR NAME";

const colors = [
  "#ff80c8",
  "#c4a1ff",
  "#83eaff",
  "#fff0a6",
  "#ffb3e6"
];

// Create galaxy stars
for (let i = 0; i < 130; i++) {
  const star = document.createElement("span");
  star.className = "star";

  const size = Math.random() * 2.5 + 1;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  star.style.animationDuration = `${1 + Math.random() * 3}s`;

  stars.appendChild(star);
}

// Floating hearts and sparkles
function createMagic(x, y) {
  const symbols = ["♥", "♡", "✦", "✧", "✨"];

  for (let i = 0; i < 7; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left =
      `${x + (Math.random() - 0.5) * 100}px`;
    particle.style.top =
      `${y + (Math.random() - 0.5) * 40}px`;

    particle.style.color =
      colors[Math.floor(Math.random() * colors.length)];

    particle.style.fontSize =
      `${16 + Math.random() * 25}px`;

    particle.style.animationDelay = `${Math.random() * 0.3}s`;

    particles.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }
}

// Click anywhere to create magic
document.addEventListener("click", (event) => {
  if (event.target === button) return;
  createMagic(event.clientX, event.clientY);
});

// Galaxy button creates magic around the heart
button.addEventListener("click", () => {
  const rect = document.querySelector(".heart-container")
    .getBoundingClientRect();

  createMagic(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );

  name.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.12)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 600,
      easing: "ease-in-out"
    }
  );
});

// Initial floating hearts
setTimeout(() => {
  createMagic(window.innerWidth / 2, window.innerHeight / 2);
}, 500);
