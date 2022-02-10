    async function getPhotographers() {
        //récupère les informations sur chaque photographe
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

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
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
          alert("erreur systéme, le fichier json comporte des erreurs");
        }
    }
    init();
      
    