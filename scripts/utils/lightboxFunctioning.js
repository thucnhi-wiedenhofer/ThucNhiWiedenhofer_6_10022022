/** ****Ouverture de la lightbox au click de la card media portefolio*********** */

const lightboxModal = document.getElementById('lightbox_modal');

// eslint-disable-next-line no-unused-vars
function openLightbox() {
  lightboxModal.style.display = 'block';
}

// fermeture de la modale avec close icon
// eslint-disable-next-line no-unused-vars
function closeLightbox() {
  lightboxModal.style.display = 'none';
}
