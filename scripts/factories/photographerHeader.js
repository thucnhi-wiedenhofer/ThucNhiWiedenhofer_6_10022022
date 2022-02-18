// Factory pour créer une section de photographe-header dans la page photographer.js

function photographerHeaderFactory(data) {
  const { name, portrait, id, city, country, tagline , price } = data;

  const picture = `assets/photographers/${portrait}`;    

    function getHeaderDOM() {
        const article = document.createElement( 'article' );  
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const h3 = document.createElement( 'h3');
        h3.textContent = `${city}, ${country}`;
        const p = document.createElement('p');
        p.textContent = tagline;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        article.appendChild(h1);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(img);
        return article;
    }
    return { name, picture, getHeaderDOM };

}
