// code JavaScript lié à la page photographer.html

const idPhotographer = getIdPhotographer();

async function getPhotographers() {
  // récupère les informations des photographes dans phototographers.json
  try {
  const response = await fetch("./data/photographers.json", {
  headers: {
    "Content-Type": "application/json",        
    Accept: "application/json",
  },
  });
  const photographers = await response.json();
  return photographers;
  } catch (error) {
  console.error(error);
  }
} 

function getIdPhotographer() {
  //recupère l'id du photographe sélectionné
  const parameterURL = new URLSearchParams(window.location.search);
  const idPhotographer = parseInt(parameterURL.get('id'), 10);
  return idPhotographer;
}

function getOnePhotographer(photographers, idPhotographer) {
  const onePhotographer = photographers.photographers.find((item) => item.id === idPhotographer);
  return onePhotographer;
}

async function displayPhotographer(onePhotographer) {
  const photographerHeader = document.querySelector(".photograph-header");
  const photographerModel = photographerHeaderFactory(onePhotographer);
  const headerDOM = photographerModel.getHeaderDOM();
  photographerHeader.appendChild(headerDOM);
}

async function initialise(idPhotographer) {
  try {
    // Récupère les datas des photographes et les affiche
    const photographers = await getPhotographers();
    const onePhotographer = getOnePhotographer(photographers, idPhotographer);    
    displayPhotographer(onePhotographer);

  } catch (err) {
    // eslint-disable-next-line no-alert
    alert("erreur système, le fichier json comporte des erreurs");
  }
}
initialise(idPhotographer);