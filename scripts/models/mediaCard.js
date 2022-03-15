//
/** ******création card media du portefolio: photo ou video du photographe***** */
// eslint-disable-next-line no-unused-vars
function cardMedia(data) {
  const {
    id, photographerId, title, likes,
  } = data;

  function getCardMedia() {
    const card = document.createElement('div');
    card.className = 'card';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.setAttribute('id', `${id}-${photographerId}`);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h3 = document.createElement('h3');
    h3.textContent = title;
    const div = document.createElement('div');
    div.className = 'row';
    const span = document.createElement('span');
    span.setAttribute('id', `${id}`);
    span.textContent = likes;
    const icon = document.createElement('span');
    icon.className = 'fa fa-heart';
    icon.setAttribute('role', 'img');
    icon.setAttribute('tabindex', '0');
    icon.setAttribute('onclick', `like(${id})`);
    icon.setAttribute('onkeypress', `like(${id})`);
    icon.setAttribute('aria-label', 'clicker ou touche entrée pour ajouter un like');

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardBody.appendChild(h3);
    cardBody.appendChild(div);
    div.appendChild(span);
    div.appendChild(icon);

    return card;
  }
  return { getCardMedia };
}
