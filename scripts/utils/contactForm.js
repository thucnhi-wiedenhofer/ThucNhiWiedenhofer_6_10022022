/* eslint-disable no-unused-vars */
// Ouverture de la modale quand on appuie sur contactez-moi
const modal = document.getElementById('contact_modal');
const main = document.getElementById('main');

function displayModal() {
  modal.style.display = 'block';
  // background flou quand la modale est ouverte:
  main.style.filter = 'blur(3px) grayscale(50%)';
}

// fermeture de la modale avec close icon
function closeModal() {
  modal.style.display = 'none';
  main.style.filter = 'none';
}

/** ******Affichage des champs saisie dans la console après
 * validation du formulaire de contact avec html5***** */

function validContactForm() {
  const inputFirstname = document.getElementById('firstname');
  const inputLastname = document.getElementById('lastname');
  const inputEmail = document.getElementById('email');
  const inputMessage = document.getElementById('message');

  console.log(inputFirstname.value);
  console.log(inputLastname.value);
  console.log(inputEmail.value);
  console.log(inputMessage.value);
}
