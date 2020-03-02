const navSlide = () => {
  const vroom = document.querySelector(".vroom");
  const nav = document.querySelector(".navlinks");
  const navlinks = document.querySelectorAll(".navlinks li");
  /* toggle */
  vroom.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    vroom.classList.toggle("toggle");
  });
};
navSlide();
