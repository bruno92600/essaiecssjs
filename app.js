// attraper le body du html
const body = document.querySelector("body");

// attraper tout les ID #slider-input du html
const sliderInput = document.querySelector("#slider-input");

// attraper toutes les classes .box du html
const allBoxes = document.querySelectorAll(".box");

// attraper toutes les classes .pill du html
const allPills = document.querySelectorAll(".pill");

// attraper toutes les classes .hidden-pill du html
const allHiddenPills = document.querySelectorAll(".hidden-pill");

// attraper toutes les classes .arrow du html
const allArrows = document.querySelectorAll(".arrow");

// attraper tout les ID #expand du html
const expandPill = document.querySelector("#expand");

// attraper tout les ID #x-letter du html
const xLetterPath = document.querySelector("#x-letter");

// attraper tout les ID #x-letter-svg du html
const xLetterSVG = document.querySelector("#x-letter-svg");

// attraper toutes les classes .x-box du html
const xBox = document.querySelector(".x-box");

// attraper toutes les classes .social-fan du html
const socialFan = document.querySelector(".social-fan");

// attraper tout les ID #reverse du html
const reversePill = document.querySelector("#reverse");

// attraper toutes les classes .box-container du html
const boxContainer = document.querySelector(".box-container");

// attraper tout les ID #icon du html
const iconPath = document.querySelector("#icon");

// attraper toutes les classes .hidden-box du html
const hiddenBox = document.querySelector(".hidden-box");

// attraper toutes les classes .hidden-box .text-box du html
const textBox = document.querySelector(".hidden-box .text-box");

// attraper la palette couleur avec l'index 0 pour savoir quelle tableau on veux
let paletteIndex = 0;

// je vais chercher le svg X qui est le 11eme élément du html
const xLetterIndex = 11;

// je vais chercher les socialFan et applique un index
const socialFanIndex = 1;

// je vais chercher le 3eme élément du html
const rotateIconIndex = 3;

// état de départ
// attraper le xLetterSVG pour pouvoir changer son remplissage puis prendre la paletteIndex pour l'appliquer sur xLetterIndex
// grace a fill dans colors.js
xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill;

// j'applique la palette couleur a toutes les pills (elements) qui va aller chercher toutes les colors grace a index et changer le backgroundcolor
allPills.forEach(
  (pill, i) =>
    (pill.style.backgroundColor = colorPalettes[paletteIndex][i].fill)
);

// j'attrape toutes les hiddenpills qui va changer leur background
allHiddenPills.forEach(
  (hiddenPill) =>
    (hiddenPill.style.backgroundColor =
      colorPalettes[paletteIndex][socialFanIndex].fill)
);

///////////////////                                                                   //////////////////////////////////

// création d'une const expand pour la fonction de l'évenement
function expand() {
  // if qui va permettre d'ouvrir et fermer la .hidden-box... si la .hidden-box n'est pas égale a 0 alors elle se ferme
  if (hiddenBox.clientWidth !== 0) {
    // cacher le text-box
    textBox.classList.add("hidden");
    // ajout de 200ms pour fermer la .hidden-box grace a setTimeout
    setTimeout(
      () =>
        // je ferme la .hidden-box avec 200ms
        (hiddenBox.style.width = "0px"),
      200
    );
    // sinon je rouvre la .hidden-box
  } else {
    // attraper la .hidden-box qui est caché, puis modifier sa largeur
    hiddenBox.style.width = "1700px";
    // ajout de 500ms pour que le text-box apparaisse après l!ouverture de la .hidden-box grace a setTimeout qui va supprimer la classe remove
    setTimeout(() => textBox.classList.remove("hidden"), 500);
  }
}

// ajout d'un évenement sur expand pour creer une colone sur la gauche
expandPill.addEventListener("click", expand);

// création d'une fonction reverse pour la fonction de l'évenement
const reverse = () => {
  // if qui va permettre de changer le wrap en reverse, si boxContainer est egal a wrap
  if (boxContainer.style.flexWrap === "wrap") {
    // boxContainer va se changer en wrap-reverse
    boxContainer.style.flexWrap = "wrap-reverse";
  } else {
    // sinon il reste en wrap
    boxContainer.style.flexWrap = "wrap";
  }
};

// ajout d'un évenement sur reverse pour creer une colone sur la gauche
reversePill.addEventListener("click", reverse);

////////////////////////                                                           /////////////////////////////////////////////////

// fonction pour l'ajout des thèmes plus bas
// je veux le body background, les bordures des svgs, les svgs, l'opacité, bordures des pills,les arrondies, background box, background des pills
const addTheme = (
  bodyBackgroundColor,
  strokeWidth,
  svgFill,
  opacity,
  lineColor,
  borderRadius,
  boxBackgroundColor,
  pillBackgroundColor
) => {
  // j'attrape le body et lui assigne simplement le bodyBackgroundColor
  body.style.backgroundColor = bodyBackgroundColor;
  // j'attrape xLetterPath et lui assigne simplement le strokeWidth
  xLetterPath.style.strokeWidth = strokeWidth;
  //
  xLetterPath.style.stroke =
    lineColor || colorPalettes[paletteIndex][xLetterIndex].altStroke;
  // j'attrape xLettersvg et lui assigne simplement le svgFill et si cela n'existe pas je lui assigne colorPalette
  xLetterSVG.style.fill =
    svgFill || colorPalettes[paletteIndex][xLetterIndex].fill;
  // j'attrape xLettersvg et lui assigne simplement le opacity si il y en a une
  xLetterSVG.style.opacity = opacity;
  // j'attrape xBox et lui assigne simplement le boxBackgroundColor et si cela n'existe pas je lui assigne colorPalette
  xBox.style.backgroundColor =
    boxBackgroundColor || colorPalettes[paletteIndex][xLetterIndex].fill;
  // j'attrape le iconPath et lui assigne simplement le lineColor et si cela n'existe pas je lui assigne colorPalette
  iconPath.style.stroke =
    lineColor || colorPalettes[paletteIndex][rotateIconIndex].altStroke;
  // j'attrape xLetterPath et lui assigne simplement le strokeWidth
  iconPath.style.strokeWidth = strokeWidth;

  // je prends toutes les box avec une classe box
  allBoxes.forEach(
    (box, i) =>
      // j'obtiens la boite et je lui change sa backgroundColor et si cela n'existe pas je lui assigne colorPalette
      (box.style.backgroundColor =
        boxBackgroundColor || colorPalettes[paletteIndex][i].fill)
  );
  // je prends toutes les pills avec une classe pill
  allPills.forEach((pill, i) => {
    // j'obtiens opacité et change l'opcité
    pill.style.opacity = opacity;
    // j'obtiens backgroundColor et change le backgroundColor de pill et si cela n'existe pas je lui assigne colorPalette
    pill.style.backgroundColor =
      pillBackgroundColor || colorPalettes[paletteIndex][i].fill;
    // j'obtiens borderWidth et change le borderWidth de pill
    pill.style.borderWidth = strokeWidth;
    // j'obtiens borderColor et change le borderColor de pill et si cela n'existe pas je lui assigne colorPalette
    pill.style.borderColor =
      lineColor || colorPalettes[paletteIndex][i].altStroke;
    // j'obtiens borderBlockStyle et lui applique solid
    pill.style.borderBlockStyle = "solid";
    // j'obtiens borderRadius et lui applique borderRadius
    pill.style.borderRadius = borderRadius;
  });
  // je prends toutes les hiddenPills
  allHiddenPills.forEach((hiddenPill) => {
    // j'obtiens la pill caché avec son style et son opacité et je lui assigné une nouvelle opacité
    hiddenPill.style.opacity = opacity;
    // j'obtiens également son style et sa bordure et lui assigne strokeWidth (epaisseur de la bordure)
    hiddenPill.style.borderWidth = strokeWidth;
    // j'obtiens également son style et et son backgroundcolor et lui assigne lincolor, sinon colorpalette
    hiddenPill.style.backgroundColor =
      pillBackgroundColor || colorPalettes[paletteIndex][socialFanIndex].fill;
    // j'obtiens également son style et sa bordure coloré et lui assigne lincolor, sinon colorpalette
    hiddenPill.style.borderColor =
      lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke;
    // j'obtiens également son style et sa bordure arrondi et lui assigne borderRadius
    hiddenPill.style.borderRadius = borderRadius;
  });
  // je prends toutes les arrows (flêches)
  allArrows.forEach((arrow) => {
    // j'obtiens le style et le bloc de bordure et lui assigne solid
    arrow.style.borderBlockStyle = "solid";
    // j'obtiens le style et la bordure coloré et lui assigne lineColor
    arrow.style.borderColor = lineColor;
    // j'obtiens le style et la largeur de la bordure et lui assigne
    // 0 en haut a gauche strokWidth en haut a droite un espace puis a nouveau strokeWidth et enfin 0
    arrow.style.borderWidth = "0 " + strokeWidth + " " + strokeWidth + " 0";
    // j'obtiens le style et l'opacité et lui assigne opacity
    arrow.style.opacity = opacity;
  });
};

// création d'une fonction moveSlider pour la fonction de l'évenement
const moveSlider = () => {
  // je vais d'abord obtenir la premiere position du curseur
  const sliderInput = document.querySelector("#slider-input");
  // puis j'obtiens sa valeur
  const sliderValue = sliderInput.value;
  // si slederValue est égal a 0
  if (sliderValue == 0) {
    /*bodyBackgroundColor,
  strokeWidth,
  svgFill,
  opacity,
  lineColor,
  borderRadius,
  boxBackgroundColor,
  pillBackgroundColor*/
    // je vais ajouter un theme et me refère au nom au dessus
    // je souhaite appliqué tout ci dessous, au départ quand le bouton est a 0
    addTheme(
      "white",
      "12px",
      null,
      1,
      "rgb(38, 38, 38)",
      "100px",
      "white",
      null
    );
  }
  // si sliderValue est sup a 1 et si sliderValue est inferieur ou egal a 3
  if (sliderValue > 1 && sliderValue <= 3) {
    // je vais ajouter un theme différent et me refère au nom au dessus
    // je souhaite appliqué tout ci dessous, au départ quand le bouton est entre 1 et 3
    addTheme("white", "2px", "white", 0.5, null, "75px", null, "white");
  }
  // si sliderValue est sup ou egale a 4 et si sliderValue est inferieur ou egal a 6
  if (sliderValue >= 4 && sliderValue <= 6) {
    // je vais ajouter un theme différent et me refère au nom au dessus
    // je souhaite appliqué tout ci dessous, au départ quand le bouton est entre 4 et 6
    addTheme("white", "1px", "white", 0.5, null, "90px", null, "white");
  }
  // si sliderValue est sup ou egale a 7 et si sliderValue est inferieur a 9
  if (sliderValue >= 7 && sliderValue < 9) {
    // je vais ajouter un theme différent et me refère au nom au dessus
    // je souhaite appliqué tout ci dessous, au départ quand le bouton est entre 7 et 9
    addTheme(
      "white",
      "2px",
      "white",
      0.5,
      "rgb(38, 38, 38)",
      "50px",
      null,
      "white"
    );
  }
  // si sliderValue est egale a 10
  if (sliderValue == 10) {
    // je vais ajouter un theme différent et me refère au nom au dessus
    // je souhaite appliqué tout ci dessous, au départ quand le bouton est a 10
    addTheme(
      "rgb(38, 38, 38)",
      "12px",
      "white",
      1,
      "black",
      0,
      "transparent",
      "white"
    );
  }
};

// ajout d'un évenement sur moveSlider pour deplacer le curseur, si il y a une entrée dans l'input
sliderInput.addEventListener("input", moveSlider);

// création d'une fonction changePalette pour la fonction de l'évenement
const changePalette = () => {
  // ajout d'une classList pulse
  xLetterPath.classList.add("pulse");
  //  si paletteIndex est inferieur ou égal a 2
  if (paletteIndex >= 2) {
    // je reinitialise la palette index a 0
    paletteIndex = 0;
  } else {
    // je veux obtenir palette index et en ajouter un
    paletteIndex++;
  }
  moveSlider();
  setTimeout(() => xLetterPath.classList.remove("pulse"), 500);
};

// ajout d'un évenement sur changePalette pour quand on clique sur le x les couleurs change
xBox.addEventListener("click", changePalette);
