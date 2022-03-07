/** ****Ouverture de la lightbox au click de la card media portefolio*********** */

const lightboxModal = document.getElementById('lightbox_modal');
let slideIndex;

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
  lightboxModal.style.display = 'block';
}

// eslint-disable-next-line no-unused-vars
/* function openLightbox(n) {
  showSlide((slideIndex = n));
} */

// au click des chevrons avant/après des lightbox:

function changeSlide(n) {
  showSlide(slideIndex += n);
  console.log(slideIndex += n);
}
// fermeture de la modale lightbox avec close icon
// eslint-disable-next-line no-unused-vars
function closeLightbox() {
  lightboxModal.style.display = 'none';
}

function openLightbox(n) {
  showSlide(slideIndex = n);
  console.log(slideIndex);
}
