/* eslint-disable no-undef */
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
// fonction pour afficher les informations des photographes dans landing page
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((users) => {
    const photographerModel = photographer(users);
    const CardDOM = photographerModel.getCardDOM();
    photographersSection.appendChild(CardDOM);
  });
}

async function init() {
  try {
    // Récupère les datas des photographes et les affiche
    const { photographers } = await getPhotographers();
    displayData(photographers);
  } catch (error) {
    console.error(error);
  }
}
init();
