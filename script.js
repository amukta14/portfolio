//Darkmode logic
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Navbar Logic
const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !menuIcon.contains(e.target)) {
    mobileNav.classList.remove("show");
  }
});
