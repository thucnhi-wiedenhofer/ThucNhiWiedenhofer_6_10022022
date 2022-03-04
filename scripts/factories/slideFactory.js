/** ******Factory pour créer un slide du lightbox: photo ou video ***** */
// eslint-disable-next-line no-unused-vars
function slideFactory(data) {
  const { image, video, title } = data;

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
    const h3 = document.createElement('h3');
    h3.textContent = title;
    slide.appendChild(h3);
    return slide;
  }
  return { getMediaForSlide };
}
