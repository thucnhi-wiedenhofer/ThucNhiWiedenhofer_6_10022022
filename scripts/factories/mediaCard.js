// création card media du portefolio: photo ou video du photographe

// eslint-disable-next-line no-unused-vars
function cardMediaFactory(data) {
  const {
    id, photographerId, title, image, video, likes,
  } = data;

  function getCardMedia() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
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

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h3 = document.createElement('h3');
    h3.textContent = title;
    const div = document.createElement('div');
    div.classList.add('row');
    const span = document.createElement('span');
    span.textContent = likes;
    const icon = document.createElement('i');
    icon.className = 'fa fa-heart';
    icon.setAttribute('aria-hidden', 'true');

    card.appendChild(cardHeader);
    cardHeader.appendChild(link);
    card.appendChild(cardBody);
    cardBody.appendChild(h3);
    cardBody.appendChild(div);
    div.appendChild(span);
    div.appendChild(icon);

    return card;
  }
  return { getCardMedia };
}
