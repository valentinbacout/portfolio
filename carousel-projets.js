document.querySelectorAll('.project-image').forEach(project => {
    const carousel = project.querySelector('.carousel');
    const slides = carousel.querySelectorAll('img, video');
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
            if (slide.tagName === 'VIDEO') {
                slide.pause(); // Met en pause toutes les vidéos
            }
        });

        slides[index].classList.add('active'); // Ajoute la classe active
        if (slides[index].tagName === 'VIDEO') {
            slides[index].play(); // Joue la vidéo active
        }

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
