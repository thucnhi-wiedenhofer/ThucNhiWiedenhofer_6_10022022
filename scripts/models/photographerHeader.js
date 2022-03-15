/** Constructor pattern pour créer une section de photographe-header ********* */
/* eslint-disable no-unused-vars */

function photographerProfil(data) {
  const {
    name, portrait, id, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  function getHeaderDOM() {
    const article = document.createElement('article');
    article.setAttribute('role', 'article');
    article.setAttribute('aria-label', `Fiche du photographe ${name}`);

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = name;
    h1.setAttribute('role', 'heading');
    h1.setAttribute('aria-label', `photographe ${name}`);

    const h3 = document.createElement('h3');
    h3.textContent = `${city}, ${country}`;
    const p = document.createElement('p');
    p.textContent = tagline;
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `portrait de ${name}`);

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(p);
    article.appendChild(div);
    article.appendChild(img);
    return article;
  }

  function getBadgeDOM() {
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.setAttribute('aria-label', `tarif ${price}€ / jour`);

    const likes = document.createElement('div');
    likes.className = 'row';
    const span = document.createElement('span');
    span.setAttribute('id', 'total_likes');

    const icon = document.createElement('i');
    icon.className = 'fa fa-heart';

    const fee = document.createElement('span');
    fee.textContent = `${price}€/jour`;

    likes.appendChild(span);
    likes.appendChild(icon);
    badge.appendChild(likes);
    badge.appendChild(fee);
    return badge;
  }
  return {
    name, picture, getHeaderDOM, getBadgeDOM,
  };
}
