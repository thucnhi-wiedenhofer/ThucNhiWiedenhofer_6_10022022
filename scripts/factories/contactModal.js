//factory pour construire un formulaire de contact

function contactFormFactory(data) {
    const { name } = data;

    function getModalDOM() {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const form = document.createElement('form');

        const headerForm = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = `Contactez-moi`;
        const closeIcon = document.createElement('img');
        closeIcon.setAttribute('src', `./assets/icons/close.svg`);
        closeIcon.setAttribute('onclick', 'closeModal()');

        const span = document.createElement('span');
        span.textContent = name;

        const formData_0 = document.createElement('div');
        formData_0.classList.add('formData');
        formData_0.setAttribute('data-error', 'Veuillez entrer 2 caractères alphabétiques minimum.');
        formData_0.setAttribute('data-error-visible', 'false');
        const firstnameLabel = document.createElement('label');
        firstnameLabel.textContent = `Prénom`;
        firstnameLabel.setAttribute('for', 'prenom');
        const firstnameInput = document.createElement('input');
        firstnameInput.setAttribute('type', 'text');
        firstnameInput.setAttribute('name', 'firstname');
        firstnameInput.required = true;


        const formData_1 = document.createElement('div');
        formData_1.classList.add('formData');
        formData_1.setAttribute('data-error', 'Veuillez entrer 2 caractères alphabétiques minimum.');
        formData_1.setAttribute('data-error-visible', 'false');
        const lastnameLabel = document.createElement('label');
        lastnameLabel.textContent = `Nom`;
        lastnameLabel.setAttribute('for', 'nom');
        const lastnameInput = document.createElement('input');
        lastnameInput.setAttribute('type', 'text');
        lastnameInput.setAttribute('name', 'lastname');
        lastnameInput.required = true;

        const formData_2 = document.createElement('div');
        formData_2.classList.add('formData');
        formData_2.setAttribute('data-error', 'Veuillez entrer un email valide.');
        formData_2.setAttribute('data-error-visible', 'false');
        const emailLabel = document.createElement('label');
        emailLabel.textContent = `Email`;
        emailLabel.setAttribute('for', 'email');
        const emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('name', 'email');
        emailInput.required = true;

        const formData_3 = document.createElement('div');
        formData_3.classList.add('formData');
        formData_3.setAttribute('data-error', 'Veuillez entrer un message.');
        formData_3.setAttribute('data-error-visible', 'false');
        const messageLabel = document.createElement('label');
        messageLabel.textContent = `Votre Message`;
        messageLabel.setAttribute('for', 'message');
        const textarea = document.createElement('textarea');
        textarea.setAttribute('name', 'message');
        textarea.required = true;

        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('onclick', 'validContactForm()');
        submit.classList.add('contact_button');
        submit.textContent = `Envoyer`;

        modal.appendChild(form);
        headerForm.appendChild(h2);
        headerForm.appendChild(closeIcon);
        form.appendChild(headerForm);
        form.appendChild(span);
        form.appendChild(formData_0);
        formData_0.appendChild(firstnameLabel);
        formData_0.appendChild(firstnameInput);
        form.appendChild(formData_1);
        formData_1.appendChild(lastnameLabel);
        formData_1.appendChild(lastnameInput);
        form.appendChild(formData_2);
        formData_2.appendChild(emailLabel);
        formData_2.appendChild(emailInput);
        form.appendChild(formData_3);
        formData_3.appendChild(messageLabel);
        formData_3.appendChild(textarea);
        form.appendChild(submit);
        return modal;
    }
    return { getModalDOM }
}