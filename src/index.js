import showNavbar from './navbar';
import showContent from './contentContainer';
(() => {
  const mainContainer = document.getElementById('content');
  mainContainer.appendChild(showNavbar());
  showContent();
})();
