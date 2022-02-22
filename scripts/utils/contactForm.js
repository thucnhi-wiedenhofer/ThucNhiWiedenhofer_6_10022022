// Ouverture de la modale quand on appuie sur contactez-moi
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    const body = document.querySelector('main');
    //background flou quand la modale est ouverte:
    main.style.filter = "blur(3px) grayscale(50%)";
}

//fermeture de la modale avec close icon
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

/********Validation du formulaire de contact******/
let input = document.querySelector('form');

//Vérifie si le champs nom a au moins 2 lettres et pas de chiffres
function validName(text, index) {
    if (text.length < 2 || !/^[a-zA-Zéèàê][a-zA-Zéèàê' -]+$/.test(text)) {
        formData[index].setAttribute("data-error-visible", "true");
    } else {
        formData[index].setAttribute("data-error-visible", "false");
    }
}

//vérifie si l'email est valide
function validEmail(email) {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email)) {
        formData[2].setAttribute("data-error-visible", "true");
    } else {
        formData[2].setAttribute("data-error-visible", "false");
    }
}

// vérifie pas d'injections
function validMessage(text) {
    if (text.value.trim() === '' || text.value.trim() == null) {
        formData[3].setAttribute('data-error-visible', 'true');
    } else {
        formData[3].setAttribute("data-error-visible", "false");
    }
}


function validContactForm() {
    e.preventDefault();
    validName(input.firstname.value, 0);
    validName(input.lastname.value, 1);
    validEmail(input.email.value);
    validMessage(input.message.value);

    //si tous les champs n'ont pas d'erreur
    if (formData[0].dataset.errorVisible === "false" &&
        formData[1].dataset.errorVisible === "false" &&
        formData[2].dataset.errorVisible === "false" &&
        formData[3].dataset.errorVisible === "false") {
        //si valide, envoie contenu des champs dans la console
        console.log(input.firstname.value);
        console.log(input.lastname.value);
        console.log(input.email.value);
        console.log(input.message.value);
    } else {
        console.log('erreur');
    }
}
