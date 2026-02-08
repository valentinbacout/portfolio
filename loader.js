window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
  
    // Masquer le loader et afficher le contenu une fois que la page est chargée
    loader.style.display = 'none';
    content.style.display = 'block';
});