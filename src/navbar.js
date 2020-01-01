function showNavbar() {
  const element = document.createElement('div');
  const inputSearch = document.createElement('input');
  const toggletempContainer = document.createElement('div');
  const radioC = document.createElement('input');
  const radioF = document.createElement('input');

  radioC.setAttribute('type', 'radio');
  radioC.setAttribute('name', 'radioC');
  radioF.setAttribute('type', 'radio');
  radioF.setAttribute('name', 'radioF');
  toggletempContainer.id = 'toggle-temp';
  element.id = 'navcontent';
  inputSearch.id = 'search-box';
  inputSearch.placeholder = 'Enter your city name';
  document.body.appendChild(element);
  element.appendChild(inputSearch);
  element.appendChild(toggletempContainer);
  toggletempContainer.appendChild(radioC);
  toggletempContainer.appendChild(radioF);
  return element;
}

export default showNavbar;
