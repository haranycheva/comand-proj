var headerTitle=document.querySelector(".about-header_about-text"),pageTitleforAbout=document.querySelector(".about-company_title"),pageTitleforCards=document.querySelector(".about-company_subtitle");function checkPage(){window.location.href.includes("contacts-page.html")&&(headerTitle.textContent="Контакты"),window.location.href.includes("cards-page.html")&&(pageTitleforAbout.style.display="none",pageTitleforCards.style.display="flex")}window.addEventListener("DOMContentLoaded",checkPage);
//# sourceMappingURL=contacts-page.c495f5d0.js.map
