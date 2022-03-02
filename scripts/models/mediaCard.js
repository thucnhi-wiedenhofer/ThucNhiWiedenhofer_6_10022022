// création card media du portefolio: photo ou video du photographe

// eslint-disable-next-line no-unused-vars
function cardMedia(data) {
  const {
    id, photographerId, title, likes,
  } = data;

  function getCardMedia() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h3 = document.createElement('h3');
    h3.textContent = title;
    const div = document.createElement('div');
    div.classList.add('row');
    const span = document.createElement('span');
    span.setAttribute('id', `${id}`);
    span.textContent = likes;
    const icon = document.createElement('i');
    icon.className = 'fa fa-heart';

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