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
  const onePortefolio = photographers.media.filter(
    (item) => item.photographerId === id,
  );
  return onePortefolio;
}

async function displayPhotographer(onePhotographer) {
  // affiche dans photographer.html le photographe en utilisant la factory
  const photographerHeader = document.querySelector('.photograph-header');
  const photographerModel = photographerHeaderFactory(onePhotographer);
  const headerDOM = photographerModel.getHeaderDOM();
  photographerHeader.appendChild(headerDOM);

  const badgeModel = photographerHeaderFactory(onePhotographer);
  const badgeDOM = badgeModel.getBadgeDOM();
  photographerHeader.appendChild(badgeDOM);
}

async function displayContactModal(onePhotographer) {
  const contactModal = document.querySelector('#contact_modal');
  const modalModel = contactFormFactory(onePhotographer);
  const modalDOM = modalModel.getModalDOM();
  contactModal.appendChild(modalDOM);
}

async function displayCardMedia(onePortefolio) {
  const portefolio = document.querySelector('.portefolio');
  onePortefolio.forEach((element) => {
    const cardModel = cardMediaFactory(element);
    const cardDOM = cardModel.getCardMedia();
    portefolio.appendChild(cardDOM);
  });
}

async function initialise(id) {
  try {
    // Récupère les datas du photographe de l'id correspondant
    const photographers = await getPhotographers();
    const onePhotographer = getOnePhotographer(photographers, id);
    const onePortefolio = getOnePortefolio(photographers, idPhotographer);

    // Affiche photograph-header et badge:
    displayPhotographer(onePhotographer);
    // Affiche modal formulaire de contact:
    displayContactModal(onePhotographer);
    // Affiche les cards media du portefolio:
    displayCardMedia(onePortefolio);
  } catch (error) {
    console.error(error);
  }
}

initialise(idPhotographer);
