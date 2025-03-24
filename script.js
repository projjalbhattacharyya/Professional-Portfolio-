function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const words = ["Data Analyst", "Data Scientist", "AI/ML Engineer", "Software Engineer"];
let i = 0, j = 0, isDeleting = false;
const dynamicText = document.getElementById("dynamic-text");
const cursor = document.querySelector(".cursor");

function typeEffect() {
  let currentWord = words[i];
  let text = currentWord.substring(0, j);
  dynamicText.innerText = text;

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(typeEffect, 90);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    i = !isDeleting ? (i + 1) % words.length : i;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
