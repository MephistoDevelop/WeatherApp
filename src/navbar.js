function showNavbar() {
  const element = document.createElement('div');
  const inputSearch = document.createElement('input');
  const toggletempContainer = document.createElement('div');
  const radioC = document.createElement('input');
  const radioF = document.createElement('input');
  const textF = document.createElement('span');
  const textC = document.createElement('span');

  radioC.setAttribute('type', 'radio');
  radioC.setAttribute('name', 'radioC');
  radioF.setAttribute('type', 'radio');
  radioF.setAttribute('name', 'radioF');
  textC.textContent = '°C';
  textF.textContent = '°F';
  toggletempContainer.id = 'toggle-temp';
  element.id = 'navcontent';
  inputSearch.id = 'search-box';
  inputSearch.placeholder = 'Enter Your City Name (eg. Jalisco,MX)';
  document.body.appendChild(element);
  element.appendChild(inputSearch);
  element.appendChild(toggletempContainer);

  toggletempContainer.appendChild(radioC);
  toggletempContainer.appendChild(textC);
  toggletempContainer.appendChild(radioF);
  toggletempContainer.appendChild(textF);
  inputSearch.onkeypress = function(e) {
    if (e.keyCode === 13) {
      let city = document.getElementById('search-box').value;
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09`,
        { mode: 'cors' }
      )
        .then(function(response) {
          // Successful response :)
          let value = response.json();

          value.then(function(result) {
            console.log(result);
          });
        })
        .catch(function(err) {
          // Error :(
          alert('Error in query , try again when your conections improve. ');
        });

      document.getElementById('search-box').value = '';
    }
  };
  return element;
}

export default showNavbar;
