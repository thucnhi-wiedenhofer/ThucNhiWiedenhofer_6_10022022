/** ******Factory pour créer un slide du lightbox: photo ou video ***** */
// eslint-disable-next-line no-unused-vars
function slideFactory(data) {
  const { image, video } = data;

  function getMediaForSlide() {
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (image) {
      const img = document.createElement('img');
      img.setAttribute('src', `assets/images/${image}`);
      slide.appendChild(img);
    } else if (video) {
      const film = document.createElement('video');
      film.setAttribute('src', `assets/images/${video}`);
      slide.appendChild(film);
    }
    return slide;
  }
  return { getMediaForSlide };
}
