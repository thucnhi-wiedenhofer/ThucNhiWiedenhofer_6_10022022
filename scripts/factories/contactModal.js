//  factory pour construire un formulaire de contac

// eslint-disable-next-line no-unused-vars
function contactFormFactory(data) {
  const { name } = data;

  function getModalDOM() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const form = document.createElement('form');
    form.setAttribute('onsubmit', 'event.preventDefault(); validContactForm(); closeModal();');

    const headerForm = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contactez-moi';
    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './assets/icons/close.svg');
    closeIcon.setAttribute('onclick', 'closeModal()');

    const span = document.createElement('span');
    span.textContent = name;

    const firstnameLabel = document.createElement('label');
    firstnameLabel.textContent = 'Prénom';
    firstnameLabel.setAttribute('for', 'prenom');
    const firstnameInput = document.createElement('input');
    firstnameInput.setAttribute('type', 'text');
    firstnameInput.setAttribute('name', 'firstname');
    firstnameInput.setAttribute('id', 'firstname');
    firstnameInput.required = true;

    const lastnameLabel = document.createElement('label');
    lastnameLabel.textContent = 'Nom';
    lastnameLabel.setAttribute('for', 'nom');
    const lastnameInput = document.createElement('input');
    lastnameInput.setAttribute('type', 'text');
    lastnameInput.setAttribute('name', 'lastname');
    lastnameInput.setAttribute('id', 'lastname');
    lastnameInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.setAttribute('for', 'email');
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.required = true;

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Votre Message';
    messageLabel.setAttribute('for', 'message');
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'message');
    textarea.setAttribute('id', 'message');
    textarea.required = true;

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.classList.add('contact_button');
    submit.textContent = 'Envoyer';

    modal.appendChild(form);
    headerForm.appendChild(h2);
    headerForm.appendChild(closeIcon);
    form.appendChild(headerForm);
    form.appendChild(span);

    form.appendChild(firstnameLabel);
    form.appendChild(firstnameInput);

    form.appendChild(lastnameLabel);
    form.appendChild(lastnameInput);

    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    form.appendChild(messageLabel);
    form.appendChild(textarea);

    form.appendChild(submit);
    return modal;
  }
  return { getModalDOM };
}
