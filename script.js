// Typing Effect
const text = ["Developer", "AI Enthusiast", "Problem Solver"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
current = text[i];
document.getElementById("typing").textContent = current.substring(0, j);

if (!isDeleting && j < current.length) {
j++;
} else if (isDeleting && j > 0) {
j--;
}

if (j == current.length) isDeleting = true;
if (j == 0 && isDeleting) {
isDeleting = false;
i = (i + 1) % text.length;
}

setTimeout(type, 100);
}

type();

// Particles
particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#00ffff" },
line_linked: { enable: true, color: "#00ffff" }
}
});
