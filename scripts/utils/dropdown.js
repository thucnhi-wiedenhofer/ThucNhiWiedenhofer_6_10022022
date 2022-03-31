/** ****fonctionnements du dropdown et filtres*********** */

function Dropdown(dropdown) {
  const [button, menu] = dropdown.children;

  // ferme le dropdown en clickant en dehors :
  // eslint-disable-next-line consistent-return
  const handleClickOut = (e) => {
    if (!dropdown) {
      return document.removeEventListener('click', handleClickOut);
    }
    if (!dropdown.contains(e.target)) {
      this.toggle(false);
    }
  };

  const setValue = (item) => {
    const val = item.textContent;
    button.textContent = val;
    this.value = val;
    this.toggle(false);
    dropdown.dispatchEvent(new Event('change'));
    button.focus();
  };

  
  // Navigation clavier
  const handleKeyDown = (e) => {
    e.preventDefault();
    // si flèche du haut:
    if (e.keyCode === 38 && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
      // si flèche du bas:
    } else if (e.keyCode === 40 && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
      //  echape pour sortir :
    } else if (e.keyCode === 27) {
      this.toggle(false);
      // si entrée ou espace, valide la selection:
    } else if (e.keyCode === 13 || e.keyCode === 32) {
      setValue(e.target);
    }
  };

  const handleToggleKeyPress = (e) => {
    e.preventDefault();
    // echape pour sortir:
    if (e.keyCode === 27) {
      this.toggle(false);
      // // si entrée ou espace, ouvre dropdown:
    } else if (e.keyCode === 13 || e.keyCode === 32) {
      this.toggle(true);
      // va sur dropdown avec tab:
    } else if (e.keyCode === 9) {
      this.toggle(false);
    }
  };

  button.addEventListener('keydown', handleToggleKeyPress);
  button.addEventListener('click', () => this.toggle());
  [...menu.children].forEach((item) => {
    item.addEventListener('keydown', handleKeyDown);
    item.addEventListener('click', () => setValue(item));
  });

  this.element = dropdown;
  this.value = button.textContent;
  this.toggle = (expand = null) => {
    // eslint-disable-next-line no-param-reassign
    expand = expand === null ? menu.getAttribute('aria-expanded') !== 'true' : expand;

    menu.setAttribute('aria-expanded', expand);

    if (expand) {
      button.classList.add('active');
      menu.children[0].focus();
      document.addEventListener('click', handleClickOut);
      dropdown.dispatchEvent(new Event('opened'));
      
    } else {
      button.classList.remove('active');
      dropdown.dispatchEvent(new Event('closed'));
      document.removeEventListener('click', handleClickOut);      
    }
  };
}
const dropdown = new Dropdown(document.getElementById('dropdown'));

dropdown.element.addEventListener('change', () => {
  // eslint-disable-next-line no-undef
  select(dropdown.value);
});
