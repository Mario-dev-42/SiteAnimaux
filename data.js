const animaux = [
  {
    id: "1",
    name: "Hachiko",
    img1: "./img/cards/hachiko1.jpg",
    img2: "./img/cards/hachiko2.jpg",
    descriptionAnim:
      "Good dog, the definition of faithfulThere is a legend about him that he could wait years for his master to come back.",
    review: "Very positive",
    qualities: "faithful, very obedient, respectful",
    colors: "brown, beige",
    place: "France, 7 avenue de Samson City Guillet-sur-Mer State",
  },

  {
    id: "2",
    name: "Pigeon",
    img1: "./img/cards/pigeon2.jpg",
    img2: "./img/cards/pigeon1.jpg",
    descriptionAnim:
      "Hard to educate.If you lose sight of him for a second, you will never see him again",
    review: "Very negative",
    qualities: "He can fly",
    colors: "Grey, brown",
    place: "France, 7 avenue de Samson City Guillet-sur-Mer State",
  },
  {
    id: "3",
    name: "Cat",
    img1: "./img/cards/labbyh3.jpg",
    img2: "./img/cards/labbyh2.jpg",
    descriptionAnim:
      "Very cute cat. Do not play with his tail or you will regret it",
    review: "Positive",
    qualities: "Calm, wise",
    colors: "brown, white",
    place: "France, 7 avenue de Samson City Guillet-sur-Mer State",
  },
  {
    id: "4",
    name: "Golden Retriever",
    img1: "./img/cards/golden2.webp",
    img2: "./img/cards/golden3.jpg",
    descriptionAnim:
      "The dog of your dreams. The golden in his name is suited perfectly",
    review: "Very positive",
    qualities: "obediant, restless",
    colors: "brown, beige",
    place: "France, 7 avenue de Samson City Guillet-sur-Mer State",
  },
  {
    id: "5",
    name: "Scottish",
    img1: "./img/cards/scottish1.jpg",
    img2: "./img/cards/scottishmain1.webp",
    descriptionAnim: "Good cat. His eyes are incredible and a litlle scary. ",
    review: "Negative",
    qualities: "Fluffy",
    colors: "Grey, yellow",
    place: "France, 7 avenue de Samson City Guillet-sur-Mer State",
  },
  {
    id: "6",
    name: "Husky",
    img1: "./img/cards/husky2.jpg",
    img2: "./img/cards/huskymain1.jpg",
    descriptionAnim: "Good dog. Nothing more to add",
    review: "positive",
    qualities: "Obediant, calm",
    colors: "black, white, blue",
    place: "France, 7 avenue de Samson City Guillet-sur-Mer State",
  },
];


const params = new URLSearchParams(window.location.search);
const animalId = params.get("animal");
const found = animaux.find((element) => element.id === animalId);
console.log("found", found);
// Pour qu'on puisse cibler l'élement recherché du tableau

const title = document.querySelector('h2')
title.textContent = found.name;
title.style.opacity = "100%";
console.log(title);
// Pour qu'il prenne la propriété de l'élément du html avc h2.

const colorsContainer = document.getElementById('colors-container');
const colorsContent = document.createElement('p');
colorsContent.textContent = found.colors;
colorsContainer.appendChild(colorsContent);
// console.log(colorsContent); 

// Pour ajouter du contenu <p> dans chq cards et de la colo
const qualitiesContainer = document.getElementById('qualities-container');
const qualitiesContent = document.createElement('p');
qualitiesContent.textContent = found.qualities;
qualitiesContainer.appendChild(qualitiesContent);
// Contenu Qualities.
const reviewContainer = document.getElementById('review-container');
const reviewContent= document.createElement('p');
reviewContent.textContent = found.review;
reviewContainer.appendChild(reviewContent);
// Contenu review
const addressContainer = document.getElementById('address-container');
const addressContent = document.createElement('p');
addressContent.textContent = found.place; 
addressContainer.appendChild(addressContent)
// Contenu address
const descriptionContainer = document.getElementById("des-container");
const descriptionContent = document.createElement('p');
descriptionContent.textContent= found.descriptionAnim;
descriptionContainer.appendChild(descriptionContent);
// Contenu description
const presentationImg = document.querySelector(".presentation1");
// presentationImg.style.backgroundImage ="url('" + found.img1 + "');"
presentationImg.style.backgroundImage = `url('${found.img1}')`;
// grace à ca l'image change.

// colorsContent.classList.add('test')

// const imgContainer= document.querySelector(".japdog");
// imgContainer.style.backgroundImage= `url('${found.img2}')`;
// // imgContainer.appendChild(imgContainer);





