/** constructor pattern pour créer une lightbox*********** */
// eslint-disable-next-line no-unused-vars
function lightbox(data) {
  const {
    title,
  } = data;

  function getLightboxDOM() {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const back = document.createElement('div');
    back.className = 'back';
    const previous = document.createElement('img');
    previous.setAttribute('src', './assets/icons/chevron-left-solid.svg');
    previous.setAttribute('onclick', 'slide(-1)');

    const frame = document.createElement('div');
    frame.className = 'frame';
    const h3 = document.createElement('h3');
    h3.textContent = title;

    const forward = document.createElement('div');
    forward.className = 'forward';
    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './assets/icons/close.svg');
    closeIcon.setAttribute('onclick', 'closeModal()');
    const next = document.createElement('img');
    next.setAttribute('src', './assets/icons/chevron-right-solid.svg');
    next.setAttribute('onclick', 'slide(1)');

    modal.appendChild(back);
    back.appendChild(previous);
    modal.appendChild(frame);
    frame.appendChild(h3);
    modal.appendChild(forward);
    forward.appendChild(closeIcon);
    forward.appendChild(next);
    return modal;
  }
  return { getLightboxDOM };
}
