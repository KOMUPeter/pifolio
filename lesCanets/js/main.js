// Ajout d’une image de fond dans la zone 1
let zone1 = document.querySelector("#zone-1");
zone1.style.background = `white url(img/can_bleue.png) no-repeat
center center`;

// Partie JS
let vignettes = document.querySelectorAll("#choixCouleurs img");
let posHaut = document.querySelector("#posHaut");
let posBas = document.querySelector("#posBas");
let posGauche = document.querySelector("#posGauche");
let posDroite = document.querySelector("#posDroite");
let btsPolices = document.querySelectorAll("[data-police]");
let btsCouleurs = document.querySelectorAll("[data-color]");
let taillePetit = document.querySelector("#taillePetit");
let tailleGrand = document.querySelector("#tailleGrand");
let posX = 0;
let posY = 0;
let pas = 10;
let tailleTexte = 1.4;

vignettes.forEach(function (vignette) {
  // console.log(vignette);
  vignette.addEventListener("click", () => {
    let srcVignette = vignette.getAttribute("src", vignette);
    zone1.style.background = `white url(${srcVignette}) no-repeat center center`;
  });
});

// 14) Partie JS
let zoneTexte = document.querySelector("#zoneTexte");
let ligne = document.querySelector("#ligne");
ligne.onkeyup = majTexte;

function majTexte() {
  zoneTexte.innerHTML = `<p>${ligne.value}</p>`;
  // console.log(zoneTexte.textContent);
  zoneTexte.style.left = posX + "px";
  zoneTexte.style.top = posY + "px";
  zoneTexte.style.fontSize = tailleTexte + "em";
}

// Nous allons maintenant faire en sorte qu’un texte soit déplaçable :

posHaut.addEventListener("click", () => {
  posY -= pas;
  majTexte();
});
posBas.addEventListener("click", () => {
  posY += pas;
  majTexte();
});
posDroite.addEventListener("click", () => {
  posX += pas;
  majTexte();
});
posGauche.addEventListener("click", () => {
  posX -= pas;
  majTexte();
});

//  PERSONNALISATION DES POLICES – 3 pts
btsPolices.forEach(function (btPolice) {
  // console.log(btPolice);
  btPolice.addEventListener("click", () => {
    let police = btPolice.getAttribute("data-police");
    zoneTexte.style.fontFamily = police;
    console.log(btPolice);
  });
});

btsCouleurs.forEach(function (btCouleur) {
  // console.log(btCouleur);
  btCouleur.onclick = function () {
    let couleur = btCouleur.getAttribute("data-color");
    zoneTexte.style.color = couleur;
  };
});

// PERSONNALISATION DE LA TAILLE DU TEXTE – 2 pts
taillePetit.addEventListener("click", () => {
  tailleTexte -= 0.2;
  majTexte();
});

tailleGrand.addEventListener("click", () => {
  tailleTexte += 0.2;
  majTexte();
});

window.onload = majTexte;

// slide for tins
// Get the image container
let imageContainer = document.getElementById('choixCouleurs');

// Start the slide movement
function startSlideMovement() {
  setInterval(function() {
    // Get the first image
    let firstImage = imageContainer.querySelector('img');

    // Rotate the first image to the left
    firstImage.style.transform = 'rotateY(-90deg)';

    // Append the first image to the end of the container
    imageContainer.appendChild(firstImage);

    // Reset the rotation
    setTimeout(function() {
      firstImage.style.transform = '';
    }, 1000);
  }, 2000); // Adjust the timing as desired (2000ms = 2 seconds)
}

// Call the function to start the slide movement
startSlideMovement();