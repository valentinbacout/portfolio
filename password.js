// Afficher la modale lorsque la page est chargée
window.onload = function() {
    document.getElementById('myModal').style.display = "block";
    // Mettre le focus sur le champ de mot de passe pour que la saisie soit active immédiatement
    document.getElementById('password').focus();
};

function generateDynamicPassword() {
    const today = new Date();
    const jj = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const aaaa = today.getFullYear();

    return `valentin-bacout-${jj}-${mm}-${aaaa}`;
}



// Ajouter l'écouteur d'événement pour la touche Entrée
document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();  // Valider le mot de passe lorsque la touche Entrée est pressée
    }
});

// Fonction pour afficher/masquer le mot de passe
function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type; // Alterner le type entre 'password' et 'text'
}

// Fonction pour effacer le contenu du champ de mot de passe
function clearPassword() {
    document.getElementById('password').value = ''; // Efface le contenu
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleButton = document.getElementById("togglePasswordBtn");
    const icon = document.getElementById("togglePasswordIcon");

    // Vérifie si le mot de passe est actuellement masqué ou affiché
    if (passwordField.type === "password") {
        passwordField.type = "text"; // Affiche le mot de passe
        icon.src = "img/eye-slash-icon.png"; // Remplace l'icône par l'icône pour masquer
    } else {
        passwordField.type = "password"; // Masque le mot de passe
        icon.src = "img/eye-icon.png"; // Remplace l'icône par l'icône pour afficher
    }
}

// Afficher la modale lorsque la page est chargée
window.onload = function() {
    document.getElementById('myModal').style.display = "block";
    // Bloquer le défilement de la page
    document.body.classList.add('no-scroll');
};

// Fermer la modale et réactiver le défilement
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = generateDynamicPassword();  // Remplacez par votre mot de passe

    if (password === correctPassword) {
        document.getElementById('myModal').style.display = "none"; // Fermer la modale
        document.body.classList.remove('no-scroll'); // Réactiver le défilement
        document.getElementById('content').style.display = 'block'; // Afficher le contenu protégé
    } else {
        alert('Mot de passe incorrect');
    }
}

// Fermer la modale et réactiver le défilement si l'utilisateur clique sur la touche "Échap"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('myModal').style.display = "none"; // Fermer la modale
        document.body.classList.remove('no-scroll'); // Réactiver le défilement
    }
});