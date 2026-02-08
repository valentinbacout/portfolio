function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const fixedElement = document.getElementById("scroll-to-top");
const footer = document.getElementById("footer");

function handleScroll() {
    const footerRect = footer.getBoundingClientRect();

    if (footerRect.top <= window.innerHeight) {
        // Calculer la quantité de footer visible
        const footerVisibleHeight = window.innerHeight - footerRect.top;

        // Ajuster la position du fixedElement en fonction
        fixedElement.style.position = "fixed";
        fixedElement.style.bottom = `${footerVisibleHeight + 20}px`;
    } else {
        // Retour à la position par défaut
        fixedElement.style.position = "fixed";
        fixedElement.style.bottom = "20px";
    }
}
window.addEventListener("scroll", handleScroll);

