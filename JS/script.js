document.addEventListener("DOMContentLoaded", () => {
  // === MENU TOGGLE ===
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";

  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  nav.insertBefore(menuToggle, navLinks);

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // === DARK MODE TOGGLE ===
  const darkModeButton = document.createElement("button");
  darkModeButton.id = "dark-mode-toggle";
  darkModeButton.textContent = "🌙 Dark Mode";
  nav.appendChild(darkModeButton);

  // Load saved mode
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "☀️ Light Mode";
  }

  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeButton.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      darkModeButton.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove("active"); // close menu on mobile
    });
  });
});
