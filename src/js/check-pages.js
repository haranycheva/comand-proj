const headerTitle = document.querySelector('.about-header_about-text');
const pageTitleforAbout = document.querySelector('.about-company_title');
const pageTitleforCards = document.querySelector('.about-company_subtitle');
window.addEventListener('DOMContentLoaded', checkPage);
function checkPage() {
  console.log(
    window.location.href === 'http://localhost:1234/contacts-page.html'
  );
  if (window.location.href === 'http://localhost:1234/contacts-page.html') {
    headerTitle.textContent = 'Контакты';
  }
  if (window.location.href === 'http://localhost:1234/cards-page.html') {
    pageTitleforAbout.style.display = 'none';
    pageTitleforCards.style.display = 'flex';
  }
}
