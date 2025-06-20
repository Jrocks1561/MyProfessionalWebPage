document.getElementById('home').addEventListener('click', scrollToAbout);
document.getElementById('about').addEventListener('click', scrollToProjects);

function scrollToAbout() {
  const about = document.getElementById('about');
  const yOffset = -40; // adjust if you have a fixed header
  const y = about.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToProjects() {
  const projects = document.getElementById('projects');
  const yOffset = -40;
  const y = projects.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
