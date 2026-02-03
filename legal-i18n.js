// Extra translations for the legal notice page (does not overwrite existing keys)
(function () {
  if (typeof I18N === "undefined") return;

  I18N.fr = I18N.fr || {};
  I18N.en = I18N.en || {};

  Object.assign(I18N.fr, {
    "legal.pageTitle": "Mentions légales",
    "legal.back": "← Retour au portfolio",
    "legal.updated": "Dernière mise à jour :",
    "legal.content": `
<h3>Éditeur du site</h3>
<p><b>Nom :</b> Valentin Bacout<br/>
<b>Contact :</b> <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a></p>

<h3>Hébergement</h3>
<p>Site hébergé via <b>GitHub Pages</b> (GitHub, Inc.).</p>

<h3>Propriété intellectuelle</h3>
<p>L’ensemble des contenus présents sur ce site (textes, images, projets, documents) est protégé par le droit d’auteur. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation préalable est interdite.</p>

<h3>Responsabilité</h3>
<p>Les informations présentées sur ce site sont fournies à titre informatif. Malgré le soin apporté à leur mise à jour, l’éditeur ne saurait être tenu responsable des erreurs, omissions ou de l’indisponibilité de certaines informations.</p>

<h3>Données personnelles</h3>
<p>Ce site ne collecte pas de données personnelles à votre insu et n’utilise pas de cookies à des fins de suivi. En cas de contact par email, les informations transmises sont uniquement utilisées pour répondre à votre demande.</p>

<h3>Contact</h3>
<p>Pour toute question, vous pouvez écrire à <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a>.</p>
`,
  });

  Object.assign(I18N.en, {
    "legal.pageTitle": "Legal notice",
    "legal.back": "← Back to portfolio",
    "legal.updated": "Last updated:",
    "legal.content": `
<h3>Website owner</h3>
<p><b>Name:</b> Valentin Bacout<br/>
<b>Contact:</b> <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a></p>

<h3>Hosting</h3>
<p>This website is hosted via <b>GitHub Pages</b> (GitHub, Inc.).</p>

<h3>Intellectual property</h3>
<p>All content on this website (texts, images, projects, documents) is protected by copyright. Any reproduction, distribution, modification, or publication—whole or partial—without prior permission is prohibited.</p>

<h3>Liability</h3>
<p>Information provided on this website is for informational purposes only. While care is taken to keep it up to date, the owner cannot be held liable for errors, omissions, or temporary unavailability.</p>

<h3>Personal data</h3>
<p>This website does not collect personal data without your knowledge and does not use tracking cookies. If you contact me by email, your information is only used to reply to your request.</p>

<h3>Contact</h3>
<p>For any question, please email <a href="mailto:valentinbacout@gmail.com">valentinbacout@gmail.com</a>.</p>
`,
  });
})();