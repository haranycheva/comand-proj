const headerTitle = document.querySelector('.about-header_about-text');
const pageTitleforAbout = document.querySelector('.about-company_title');
const pageTitleforCards = document.querySelector('.about-company_subtitle');
window.addEventListener('DOMContentLoaded', checkPage);
function checkPage() {
  if ((window.location.href).includes('contacts-page.html')) {
    headerTitle.textContent = 'Контакты';
  }
  if ((window.location.href).includes('cards-page.html')) {
    pageTitleforAbout.style.display = 'none';
    pageTitleforCards.style.display = 'flex';
  }
}
