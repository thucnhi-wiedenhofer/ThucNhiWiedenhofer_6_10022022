/** constructor pattern pour créer une lightbox*********** */
// eslint-disable-next-line no-unused-vars
function lightbox() {
  function getLightboxDOM() {
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';

    const closeIcon = document.createElement('img');
    closeIcon.className = 'close-lightbox';
    closeIcon.setAttribute('src', './assets/icons/closeLightbox.svg');
    closeIcon.setAttribute('onclick', 'closeLightbox()');
    closeIcon.setAttribute('alt', 'fermer la lightbox avec la touche echap');

    const back = document.createElement('div');
    back.className = 'back';
    const previous = document.createElement('img');
    previous.setAttribute('src', './assets/icons/chevron-left-solid.svg');
    previous.setAttribute('onclick', 'changeSlide(-1)');
    previous.setAttribute('alt', 'image précédente');

    const frame = document.createElement('div');
    frame.className = 'frame';

    const forward = document.createElement('div');
    forward.className = 'forward';
    const next = document.createElement('img');
    next.setAttribute('src', './assets/icons/chevron-right-solid.svg');
    next.setAttribute('onclick', 'changeSlide(1)');
    next.setAttribute('alt', 'image suivante');

    modal.appendChild(closeIcon);
    modal.appendChild(back);
    back.appendChild(previous);
    modal.appendChild(frame);
    modal.appendChild(forward);
    forward.appendChild(next);
    return modal;
  }
  return { getLightboxDOM };
}
