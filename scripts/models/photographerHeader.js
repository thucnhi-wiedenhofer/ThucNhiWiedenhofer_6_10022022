/* eslint-disable no-unused-vars */
// Factory pour créer une section de photographe-header dans la page photographer.js

function photographerProfil(data) {
  const {
    name, portrait, id, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  function getHeaderDOM() {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = name;
    const h3 = document.createElement('h3');
    h3.textContent = `${city}, ${country}`;
    const p = document.createElement('p');
    p.textContent = tagline;
    const img = document.createElement('img');
    img.setAttribute('src', picture);

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(p);
    article.appendChild(div);
    article.appendChild(img);
    return article;
  }

  function getBadgeDOM() {
    const badge = document.createElement('div');
    badge.classList.add('badge');

    const likes = document.createElement('div');
    likes.classList.add('row');
    const span = document.createElement('span');

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
