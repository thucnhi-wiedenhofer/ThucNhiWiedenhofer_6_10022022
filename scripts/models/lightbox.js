/** constructor pattern pour créer une lightbox*********** */
// eslint-disable-next-line no-unused-vars
function lightbox(data) {
  const {
    title,
  } = data;

  function getLightboxDOM() {
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';

    const closeIcon = document.createElement('img');
    closeIcon.className = 'close-lightbox';
    closeIcon.setAttribute('src', './assets/icons/closeLightbox.svg');
    closeIcon.setAttribute('onclick', 'closeLightbox()');

    const back = document.createElement('div');
    back.className = 'back';
    const previous = document.createElement('img');
    previous.setAttribute('src', './assets/icons/chevron-left-solid.svg');
    previous.setAttribute('onclick', 'slide(-1)');

    const frame = document.createElement('div');
    frame.className = 'frame';

    const forward = document.createElement('div');
    forward.className = 'forward';
    const next = document.createElement('img');
    next.setAttribute('src', './assets/icons/chevron-right-solid.svg');
    next.setAttribute('onclick', 'slide(1)');

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
