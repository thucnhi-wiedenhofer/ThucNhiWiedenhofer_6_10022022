/* eslint-disable no-unused-vars */
// Factory pour créer une section de photographe-header dans la page photographer.js

function photographerHeaderFactory(data) {
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
    const div = document.createElement('div');
    div.classList.add('badge');
    const span = document.createElement('span');
    span.textContent = `${price}€/jour`;
    div.appendChild(span);
    return div;
  }
  return {
    name, picture, getHeaderDOM, getBadgeDOM,
  };
}
