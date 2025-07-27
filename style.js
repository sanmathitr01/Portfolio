// Typewriter effect
const text = "Sanmathi TR - MCA Graduate | Web Developer & Admin Executive";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-name").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
// Project animation on scroll
const projectHeadings = document.querySelectorAll('#projects h3');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

projectHeadings.forEach(h => observer.observe(h));
