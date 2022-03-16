/** ****** Constructor pattern pour construire une modale formulaire de contact********* */
// eslint-disable-next-line no-unused-vars
function contactForm(data) {
  const { name } = data;

  function getFormModalDOM() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const form = document.createElement('form');
    form.setAttribute('id', 'contact_form');
    form.setAttribute('onsubmit', 'event.preventDefault(); validContactForm();');

    const headerForm = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contactez-moi';
    h2.setAttribute('aria-label', `formulaire pour contacter ${name}`);

    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './assets/icons/close.svg');
    closeIcon.setAttribute('onclick', 'closeModal()');
    closeIcon.setAttribute(
      'aria-label',
      'fermer le formulaire de contact avec la touche echap',
    );

    const span = document.createElement('span');
    span.textContent = name;

    const firstData = document.createElement('div');
    firstData.classList.add('formData');
    firstData.setAttribute('data-error', 'Veuillez entrer 2 caractères alphabétiques minimum.');
    firstData.setAttribute('data-error-visible', 'false');
    const firstnameLabel = document.createElement('label');
    firstnameLabel.textContent = 'Prénom';
    firstnameLabel.setAttribute('for', 'firstname');
    const firstnameInput = document.createElement('input');
    firstnameInput.setAttribute('type', 'text');
    firstnameInput.setAttribute('name', 'firstname');
    firstnameInput.setAttribute('id', 'firstname');

    const lastData = document.createElement('div');
    lastData.classList.add('formData');
    lastData.setAttribute('data-error', 'Veuillez entrer 2 caractères alphabétiques minimum.');
    lastData.setAttribute('data-error-visible', 'false');
    const lastnameLabel = document.createElement('label');
    lastnameLabel.textContent = 'Nom';
    lastnameLabel.setAttribute('for', 'lastname');
    const lastnameInput = document.createElement('input');
    lastnameInput.setAttribute('type', 'text');
    lastnameInput.setAttribute('name', 'lastname');
    lastnameInput.setAttribute('id', 'lastname');

    const emailData = document.createElement('div');
    emailData.classList.add('formData');
    emailData.setAttribute('data-error', 'Veuillez entrer un email valide.');
    emailData.setAttribute('data-error-visible', 'false');
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.setAttribute('for', 'email');
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');

    const messageData = document.createElement('div');
    messageData.classList.add('formData');
    messageData.setAttribute('data-error', 'Veuillez entrer un message.');
    messageData.setAttribute('data-error-visible', 'false');
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Votre Message';
    messageLabel.setAttribute('for', 'message');
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'message');
    textarea.setAttribute('id', 'message');

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.classList.add('contact-button');
    submit.textContent = 'Envoyer';

    modal.appendChild(form);
    headerForm.appendChild(h2);
    headerForm.appendChild(closeIcon);
    form.appendChild(headerForm);
    form.appendChild(span);

    form.appendChild(firstData);
    firstData.appendChild(firstnameLabel);
    firstData.appendChild(firstnameInput);

    form.appendChild(lastData);
    lastData.appendChild(lastnameLabel);
    lastData.appendChild(lastnameInput);

    form.appendChild(emailData);
    emailData.appendChild(emailLabel);
    emailData.appendChild(emailInput);

    form.appendChild(messageData);
    messageData.appendChild(messageLabel);
    messageData.appendChild(textarea);

    form.appendChild(submit);
    return modal;
  }
  return { getFormModalDOM };
}
