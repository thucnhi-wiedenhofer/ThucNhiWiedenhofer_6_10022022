/* eslint-disable no-undef */
// code JavaScript lié à la page photographer.html

// eslint-disable-next-line consistent-return
async function getPhotographers() {
  // récupère les informations des photographes dans phototographers.json
  try {
    const response = await fetch('./data/photographers.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const photographers = await response.json();
    return photographers;
  } catch (error) {
    console.error(error);
  }
}

function getIdPhotographer() {
  // recupère l'id du photographe sélectionné
  const parameterURL = new URLSearchParams(window.location.search);
  const idPhotographer = parseInt(parameterURL.get('id'), 10);
  return idPhotographer;
}
const idPhotographer = getIdPhotographer();

function getOnePhotographer(photographers, id) {
  // cherche l'id correspondant parmi les photographes
  const onePhotographer = photographers.photographers.find((item) => item.id === id);
  return onePhotographer;
}

function getOnePortefolio(photographers, id) {
  // recupere le portefolio du photographe
  let onePortefolio = photographers.media.filter(
    (item) => item.photographerId === id,
  );
  onePortefolio = onePortefolio.map((item, index) => ({ index, ...item }));
  console.log(onePortefolio);
  return onePortefolio;
}

async function displayPhotographer(onePhotographer) {
  // affiche dans photographer.html le photographe en utilisant la factory
  const photographerHeader = document.querySelector('.photograph-header');
  const photographerModel = photographerProfil(onePhotographer);
  const headerDOM = photographerModel.getHeaderDOM();
  photographerHeader.appendChild(headerDOM);

  const badgeModel = photographerProfil(onePhotographer);
  const badgeDOM = badgeModel.getBadgeDOM();
  photographerHeader.appendChild(badgeDOM);
}

async function displayContactModal(onePhotographer) {
  const contactModal = document.querySelector('#contact_modal');
  const formModel = contactForm(onePhotographer);
  const formDOM = formModel.getFormModalDOM();
  contactModal.appendChild(formDOM);
}

async function displayCardMedia(onePortefolio) {
  const portefolio = document.querySelector('.portefolio');

  onePortefolio.forEach((element) => {
    const cardModel = cardMedia(element);
    const cardDOM = cardModel.getCardMedia();
    portefolio.appendChild(cardDOM);
    const mediaModel = mediaFactory(element);
    const mediaDOM = mediaModel.getMedia();
    const idMedia = `${element.id}-${element.photographerId}`;
    const cardHeader = document.getElementById(idMedia);
    cardHeader.appendChild(mediaDOM);
  });
}

async function displayLightboxModal(onePortefolio) {
  const lightboxModal = document.querySelector('#lightbox_modal');
  const lightboxModel = lightbox(onePortefolio);
  const lightboxDOM = lightboxModel.getLightboxDOM();
  lightboxModal.appendChild(lightboxDOM);

  onePortefolio.forEach((elt) => {
    const slideModel = slideFactory(elt);
    const slideDOM = slideModel.getMediaForSlide();
    const frame = document.querySelector('.frame');
    frame.appendChild(slideDOM);
  });
}

async function initialise(id) {
  try {
    // Récupère les datas du photographe de l'id correspondant
    const photographers = await getPhotographers();
    const onePhotographer = getOnePhotographer(photographers, id);
    const onePortefolio = getOnePortefolio(photographers, idPhotographer);
    // const index = getIndexPortefolio(onePortefolio);

    // Affiche photograph-header et badge:
    displayPhotographer(onePhotographer);
    // Affiche modal formulaire de contact:
    displayContactModal(onePhotographer);
    // Affiche les cards media du portefolio:
    displayCardMedia(onePortefolio);
    // Affiche total des likes dans badge:
    getTotalLikes(onePortefolio);
    // Affiche modal lightbox:
    displayLightboxModal(onePortefolio);
  } catch (error) {
    console.error(error);
  }
}

initialise(idPhotographer);
