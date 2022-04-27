const nav = document.querySelector(".link");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("active");
  });
});
