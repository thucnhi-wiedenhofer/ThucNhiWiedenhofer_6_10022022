/** ******Factory pour créer card media du portefolio: photo ou video du photographe***** */
// eslint-disable-next-line no-unused-vars
function mediaFactory(data) {
  const { index, image, video } = data;

  function getMedia() {
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    // ouverture de la lightbox au click de l'image:
    link.setAttribute('onclick', `openLightbox(${index});`);
    // ouverture de la lightbox avec la touche entrée:
    link.setAttribute('onkeydown', `keyOpenLightbox(${index});`);
    link.setAttribute('tabindex', '0');
    if (image) {
      const img = document.createElement('img');
      img.setAttribute('src', `assets/images/${image}`);
      link.appendChild(img);
    } else if (video) {
      const film = document.createElement('video');
      film.setAttribute('src', `assets/images/${video}`);
      link.appendChild(film);
    }
    return link;
  }
  return { getMedia };
}
