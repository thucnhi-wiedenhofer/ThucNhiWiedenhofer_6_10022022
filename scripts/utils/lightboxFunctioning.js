/* eslint-disable no-use-before-define */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/** ****Ouverture de la lightbox au click de la card media portefolio*********** */

const lightboxModal = document.getElementById('lightbox_modal');
let slideIndex;

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  // si arrivé à la dernier slide, montre la première slide:
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  // au click arrière de la premiere slide, montre la dernière slide:
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  // Seul slideIndex est visible:
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  // rend focus uniquement la modal pour l'assistant technologique:
  document.querySelector('main').inert = true;
  document.querySelector('header').inert = true;
  document.getElementById('contact_modal').inert = true;

  slides[slideIndex].style.display = 'block';
  lightboxModal.style.display = 'block';
  // navigation par touche:
  document.addEventListener('keydown', keyLightbox);
}

// au click des chevrons avant/après des lightbox:
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// fermeture de la modale lightbox avec close icon
function closeLightbox() {
  // fermeture au click sur close icon:
  lightboxModal.style.display = 'none';
  // fermeture par touche echap:
  document.removeEventListener('keydown', keyLightbox, false);
  // enleve la propriété inert pour l'assistant technologique:
  document.querySelector('main').inert = false;
  document.querySelector('header').inert = false;
  document.getElementById('contact_modal').inert = false;
}
// Ouverture de la lightbox au click de l'image de la card portefolio
// avec index du media = slideIndex:
function openLightbox(n) {
  showSlide(slideIndex = n);
}

function keyOpenLightbox(e, index) {
  if (e.keyCode === 13) {
    openLightbox(index);
  }
}

function keyLightbox(e) {
  switch (e.keyCode) {
    case 37:
      changeSlide(-1);
      break;
    case 39:
      changeSlide(1);
      break;
    case 27:
      closeLightbox();
      break;
    default:
    // do nothing
  }
}
