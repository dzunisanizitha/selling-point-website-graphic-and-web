document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger, .menu-toggle, #menuToggle");
  const menu = document.querySelector(".nav-links, .menu, nav ul");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});