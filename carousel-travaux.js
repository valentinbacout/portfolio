document.querySelectorAll('.travaux-image').forEach(project => {
    const carousel = project.querySelector('.carousel');
    const slides = carousel.querySelectorAll('img');
    let currentIndex = 0;

    // Fonction pour afficher une diapositive (image ou vidéo)
    function showSlide(index) {
        if (index >= slides.length) {
            index = 0;
        }
        if (index < 0) {
            index = slides.length - 1;
        }

        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Retire la classe active
        });

        slides[index].classList.add('active'); // Ajoute la classe active
        currentIndex = index; // Met à jour l'index courant
    }

    // Gestion des boutons précédent et suivant
    project.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    project.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Initialisation du carrousel
    showSlide(currentIndex);
});