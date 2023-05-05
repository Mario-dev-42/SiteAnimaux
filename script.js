const slide = [
  "./img/baniere/slide0.jpeg",
  "./img/baniere/slide1.jpg",
  "./img/baniere/slide2.jpg",
  "./img/baniere/slide3.jpg",
];

const carouselImages = document.querySelector(".caroussel-container");
const prevButton = document.querySelector("#left");
const nextButton = document.querySelector("#right");


let currentIndex = 0;

function showImage(index) {
  carouselImages.style.backgroundImage = `url(${slide[index]})`;
}



function showNextImage() {
  currentIndex = (currentIndex + 1) % slide.length;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slide.length - 1;
  }
  showImage(currentIndex);
}

showImage(currentIndex);

nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

// //////////////////////////////////////////////////////////

// // autre facon

// setInterval(() => {
//     showNextImage(currentIndex)
// }, 2000);
