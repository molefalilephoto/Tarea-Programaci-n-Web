// Animaciones al hacer scroll

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


// Cambio entre modo claro y oscuro

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "Modo Oscuro";
  } else {
    themeBtn.textContent = "Modo Claro";
  }

});