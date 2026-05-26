// Typing Effect

const text = ["Developer", "AI Enthusiast", "Problem Solver"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {

current = text[i];

document.getElementById("typing").textContent =
current.substring(0, j);

if (!isDeleting && j < current.length) {
j++;
}

else if (isDeleting && j > 0) {
j--;
}

if (j == current.length) {
isDeleting = true;
}

if (j == 0 && isDeleting) {
isDeleting = false;
i = (i + 1) % text.length;
}

setTimeout(type, 100);

}

type();

// Particles Background

particlesJS("particles-js", {
particles: {
number: { value: 90 },

color: { value: "#ffffff" },

opacity: { value: 0.4 },

size: { value: 3 },

line_linked: {
enable: true,
color: "#ffffff",
opacity: 0.2
},

move: {
enable: true,
speed: 2
}
}
});

// Project Phase Switch

function showPhase(phaseId) {

const phases = document.querySelectorAll(".phase-content");

phases.forEach((phase) => {
phase.classList.remove("active-phase");
});

document.getElementById(phaseId).classList.add("active-phase");

}
