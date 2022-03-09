/* eslint-disable no-unused-vars */
// bouton contact change de couleur au survol:
const button = document.getElementById('contact_button');
button.addEventListener(
  'mouseover',
  () => {
    button.style.backgroundColor = 'var(--tertiary)';
    button.style.color = 'var(--black)';
  },
);
button.addEventListener(
  'mouseout',
  () => {
    button.style.background = 'var(--primary)';
    button.style.color = '#ffffff';
  },
);

// Ouverture de la modale quand on appuie sur contactez-moi
const modal = document.getElementById('contact_modal');
const main = document.getElementById('main');

function displayModal() {
  modal.style.display = 'block';
  // background flou quand la modale est ouverte:
  main.style.filter = 'blur(3px) grayscale(50%)';

  // rend focus uniquement la modal pour l'assistant technologique:
  document.querySelector('main').inert = true;
  document.querySelector('header').inert = true;
  document.getElementById('lightbox_modal').inert = true;
}

// fermeture de la modale avec close icon
function closeModal() {
  modal.style.display = 'none';
  main.style.filter = 'none';

  document.getElementById('contact_button').focus();
  // enlève la propriété inert pour l'assistant technologique:
  document.querySelector('main').inert = false;
  document.querySelector('header').inert = false;
  document.getElementById('lightbox_modal').inert = false;
}

/** ******Validation du formulaire de contact***** */

// Vérifie si le champs nom a au moins 2 lettres et pas de chiffres
function validName(elt, index) {
  if (elt.value.length < 2 || !/^[a-zA-Zéèàê][a-zA-Zéèàê' -]+$/.test(elt.value)) {
    elt.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    elt.parentElement.setAttribute('data-error-visible', 'false');
  }
}

// vérifie si l'email est valide
function validEmail(email) {
  if (email.value === '' || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.value,
  )) {
    email.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    email.parentElement.setAttribute('data-error-visible', 'false');
  }
}

// vérifie pas d'injections
function validMessage(text) {
  if (text.value.trim() === '' || text.value.trim() == null) {
    text.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    text.parentElement.setAttribute('data-error-visible', 'false');
  }
}

function validContactForm() {
  const form = document.getElementById('contact_form');
  const inputFirstname = document.getElementById('firstname');
  const inputLastname = document.getElementById('lastname');
  const inputEmail = document.getElementById('email');
  const inputMessage = document.getElementById('message');

  // Vérification des champs de saisie
  validName(inputFirstname, 0);
  validName(inputLastname, 1);
  validEmail(inputEmail);
  validMessage(inputMessage);

  if (inputFirstname.parentElement.dataset.errorVisible === 'false'
    && inputLastname.parentElement.dataset.errorVisible === 'false'
    && inputEmail.parentElement.dataset.errorVisible === 'false'
    && inputMessage.parentElement.dataset.errorVisible === 'false') {
    // si valide, envoie contenu des champs dans la console, reinitialise et fermeture de la modale
    closeModal();
    console.log(inputFirstname.value);
    console.log(inputLastname.value);
    console.log(inputEmail.value);
    console.log(inputMessage.value);
    form.reset();
  }
}
