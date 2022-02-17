function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    /*
    const link = document.createElement('a');
    link.setAttribute('role', 'link');
    link.setAttribute('href', `photographer.html?id=${id}`);
    link.setAttribute('aria-label', `visiter la page de ${name}`);

    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(span);*/
    

    function getUserCardDOM() {
        const article = document.createElement( 'article' );        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const link = document.createElement('a');
        link.setAttribute('role', 'link');
        link.setAttribute('href', `photographer.html?id=${id}`);
        link.setAttribute('aria-label', `visiter la page de ${name}`);

        const h4 = document.createElement( 'h4');
        h4.textContent = [city +', '+country];
        const p = document.createElement('p');
        p.textContent = tagline;
        const span = document.createElement('span');
        span.textContent = price +'€/jour';
        
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(span);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}