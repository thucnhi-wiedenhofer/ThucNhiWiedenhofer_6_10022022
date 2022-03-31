/** ****** Constructor pattern pour créer une card de photographe********* */
// eslint-disable-next-line no-unused-vars
function photographer(data) {
  const {
    name, portrait, id, city, country, tagline, price,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  function getCardDOM() {
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `portrait du photographe ${name}`);
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const link = document.createElement('a');
    link.setAttribute('href', `photographer.html?id=${id}`);
    link.setAttribute('aria-label', `visiter la page de ${name}`);

    const h3 = document.createElement('h3');
    h3.textContent = `${city}, ${country}`;
    const p = document.createElement('p');
    p.textContent = tagline;
    const span = document.createElement('span');
    span.textContent = `${price}€/jour`;

    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(span);
    return article;
  }
  return { name, picture, getCardDOM };
}
