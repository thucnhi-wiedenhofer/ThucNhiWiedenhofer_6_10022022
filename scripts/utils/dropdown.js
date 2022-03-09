/** ****fonctionnements du dropdown et filtres*********** */

const dropdownMenu = document.getElementById('dropdown_menu');
// const menu = document.getElementsByClassName('dropdown-menu');

// ouverture du dropdown au click du bouton popularité:
function dropdownToggle() {
  if (dropdownMenu.classList.contains('visible')) {
    dropdownMenu.classList.remove('visible');
  } else {
    dropdownMenu.classList.add('visible');
  }
}

// ferme le dropdown menu au click exterieur ou à l'interieur du menu
/* window.onclick = (event) => {
  if (!event.target.matches('.dropdown-button')) {
    let i;
    for (i = 0; i < menu.length; i += 1) {
      const openDropdown = menu[i];
      openDropdown.style.display = 'none';
    }
  }
} */
