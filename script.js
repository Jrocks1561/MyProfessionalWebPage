function scrollToAbout() {
  const about = document.getElementById("about");
  const yOffset = -40; // adjust this negative offset as needed
  const y = about.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
