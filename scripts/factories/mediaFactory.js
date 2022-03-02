// eslint-disable-next-line no-unused-vars
function mediaFactory(data) {
  const { image, video } = data;

  function getMedia() {
    const link = document.createElement('a');
    link.setAttribute('href', '#');
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
