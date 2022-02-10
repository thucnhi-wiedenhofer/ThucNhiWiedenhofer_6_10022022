    async function getPhotographers() {
        //récupère les informations des photographes dans phototographers.json
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

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographers) => {
            const photographerModel = photographerFactory(photographers);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        try {
          // Récupère les datas des photographes
          const { photographers } = await getPhotographers();
          displayData(photographers);
        } catch (err) {
          // eslint-disable-next-line no-alert
          alert("erreur système, le fichier json comporte des erreurs");
        }
    }
    init();
      
    