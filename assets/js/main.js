const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const anoSpan = document.getElementById("ano-atual");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Obrigado pela mensagem! Entraremos em contato em breve (simulação).");
  });
}
