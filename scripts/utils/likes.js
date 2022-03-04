/** Fonction qui incremente les likes media quand on clique sur l'icone*********** */

// eslint-disable-next-line no-unused-vars
function like(id) {
  const span = document.getElementById(id);
  const badge = document.getElementById('total_likes');
  // convertie une chaîne représentant une valeur numérique en un nombre
  const likes = Number(span.textContent);
  const totalLikes = Number(badge.textContent);
  const numberOfLikes = likes + 1;
  const totalOfLikes = totalLikes + 1;
  // converti un nombre en chaine de caractère ayant la valeur du nombre
  span.textContent = numberOfLikes.toString();
  badge.textContent = totalOfLikes.toString();
}

/** ******Fonction qui caltcule la somme des likes dans le badge du portefolio***** */
// eslint-disable-next-line no-unused-vars
function getTotalLikes(portefolio) {
  let total = 0;
  const totalLikes = document.getElementById('total_likes');
  portefolio.forEach((element) => {
    total += element.likes;
  });
  totalLikes.textContent = total;
}
