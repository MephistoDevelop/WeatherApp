import showNavbar from './navbar';
import showContent from './contentContainer';
(() => {
  const mainContainer = document.getElementById('content');
  const footer = document.createElement('div');
  footer.textContent = 'MephistoDevelop ® 2019';
  footer.id = 'footer-text';
  mainContainer.appendChild(showNavbar());
  showContent();
  mainContainer.appendChild(footer);
})();
