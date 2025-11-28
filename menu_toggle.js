

const btn = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu-Horizontal");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const links = document.querySelectorAll(".menu-Horizontal > li > a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      link.parentElement.classList.toggle("open");
    }
  });
});
