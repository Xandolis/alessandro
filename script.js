// Efeito de Fade-In nas Seções ao Rolamento
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
  });
  
  // Animação no foco dos campos de entrada do formulário
  document.querySelectorAll("input, textarea").forEach((element) => {
    element.addEventListener("focus", () => {
      element.classList.add("focused");
    });
    element.addEventListener("blur", () => {
      element.classList.remove("focused");
    });
  });
  