document.getElementById('home').addEventListener('click', () => scrollToSection('about'));
document.getElementById('about').addEventListener('click', () => scrollToSection('projects'));
document.getElementById('projects').addEventListener('click', () => scrollToSection('contact'));
document.getElementById('contact').addEventListener('click', () => scrollToSection('home'));

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const yOffset = -40; // adjust for fixed header height
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

const mouse = document.getElementById('mouse');
let isJumping = false;

const mouseContainer = document.getElementById('mouse-container');
let isJumping = false;

function jump() {
  if (isJumping) return;
  isJumping = true;
  mouseContainer.classList.add('jump');

  mouseContainer.addEventListener('animationend', () => {
    mouseContainer.classList.remove('jump');
    isJumping = false;
  }, { once: true });
}