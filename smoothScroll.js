document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les boutons avec la classe "button"
    const buttons = document.querySelectorAll(".button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut
            const targetId = button.getAttribute("href").substring(1); // Récupérer l'ID de la section cible
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth", // Effet de défilement fluide
                    block: "start" // Aligner la section en haut de la vue
                });
            }
        });
    });
});