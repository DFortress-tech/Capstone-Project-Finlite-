document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".ph-list");
  const navList = document.querySelector(".nav__list");

  if (!menuIcon || !navList) return;

  // Toggle mobile menu on hamburger click
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navList.classList.toggle("nav__list--active");
  });

  // Close menu when clicking on a link
  navList.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navList.classList.remove("nav__list--active");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
      navList.classList.remove("nav__list--active");
    }
  });
});
