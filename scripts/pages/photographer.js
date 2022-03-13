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
  // créer index de chaque media du portefolio pour utiliser dans mediaFactory:
  onePortefolio = onePortefolio.map((item, index) => ({ index, ...item }));
  onePortefolio.sort((a, b) => b.likes - a.likes);
  return onePortefolio;
}

async function displayPhotographer(onePhotographer) {
  // affiche dans photographer.html le photographe header et badge en utilisant la factory
  const photographerHeader = document.querySelector('.photograph-header');
  const photographerModel = photographerProfil(onePhotographer);
  const headerDOM = photographerModel.getHeaderDOM();
  photographerHeader.appendChild(headerDOM);

  const badgeModel = photographerProfil(onePhotographer);
  const badgeDOM = badgeModel.getBadgeDOM();
  photographerHeader.appendChild(badgeDOM);
}

// affiche la modale formulaire de contact du photographe
async function displayContactModal(onePhotographer) {
  const contactModal = document.querySelector('#contact_modal');
  const formModel = contactForm(onePhotographer);
  const formDOM = formModel.getFormModalDOM();
  contactModal.appendChild(formDOM);
}

// affiche le portefolio du photographe
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

// affiche la lightbox de la card
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

/** ** * Chargement de la page et de ses fonctionnalités ****** */
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
    // Affiche total des likes dans badge:
    getTotalLikes(onePortefolio);
    // Affiche modal lightbox:
    displayLightboxModal(onePortefolio);
  } catch (error) {
    console.error(error);
  }
}

initialise(idPhotographer);

// fonction menu filtre

function sortPopular(a, b) {
  if (a.likes > b.likes) {
    return -1;
  }
  if (a.likes < b.likes) {
    return 1;
  }
  return 0;
}

function sortRecent(a, b) {
  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
  return 0;
}

function sortTitle(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

// Gestion des filtres selon option choisie.
// eslint-disable-next-line consistent-return
function sortFilter(value, portefolio) {
  /*  if (value === 'Popularité') {
      portefolio.sort((a, b) => a.likes - b.likes);
    }
  
    if (value === 'Date') {
      portefolio.sort((a, b) => a.date - b.date);
    }
  
    if (value === 'Titre') {
      portefolio.sort((a, b) => a.title - b.title);
    }
  
    return portefolio;
  } */
  if (value === 'Popularité') {
    const filter = portefolio.sort(sortPopular);
    return filter;
  }
  if (value === 'Date') {
    const filter = portefolio.sort(sortRecent);
    return filter;
  }

  if (value === 'Titre') {
    const filter = portefolio.sort(sortTitle);
    return filter;
  }

  const filter = portefolio;
  return filter;
}
// Application des filtres.

// eslint-disable-next-line no-unused-vars
async function select(value) {
  const photographers = await getPhotographers();
  const onePortefolio = getOnePortefolio(photographers, idPhotographer);

  const filter = sortFilter(value, onePortefolio);
  console.log(value);
  console.log(onePortefolio);

  document.querySelector('.portefolio').innerHTML = '';
  displayCardMedia(filter);
}
