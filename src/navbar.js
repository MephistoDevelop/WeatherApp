import togleImages from './togleImages';
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
      const response = fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&cnt=6`,
        { mode: 'cors' }
      )
        .then(function(response) {
          // Successful response :)
          let value = response.json();

          let final = value.then(function(result) {
            let lon = 0,
              lat = 0,
              humidity = 0,
              airPressure = 0,
              windSpeed = 0,
              min = 0,
              max = 0,
              temp = 0,
              name = '',
              city = '',
              weather = '';
            name = result['city']['name'];
            city = result['city']['country'];
            temp = result['list'][0]['main']['temp'];
            max = result['list'][0]['main']['temp_max'];
            min = result['list'][0]['main']['temp_min'];
            lon = result['city']['coord']['lon'];
            lat = result['city']['coord']['lat'];
            humidity = result['list'][0]['main']['humidity'];
            airPressure = result['list'][0]['main']['pressure'];
            windSpeed = result['list'][0]['wind']['speed'];
            weather = result['list'][0]['weather'][0]['main'];
            //alert(result['main']['humidity']);
            const tempC = document.getElementById('general-temp');
            const locationC = document.getElementById('location-text');
            const humidityC = document.getElementById('humidity-text');
            const airPressureC = document.getElementById('airPressure-text');
            const windSpeedC = document.getElementById('wind-speed-text');
            const minTempC = document.getElementById('min-temp-text');
            const maxTempC = document.getElementById('max-temp-text');
            const weatherC = document.getElementById('weather-type');
            windSpeedC.innerText = `${windSpeed} m/s`;
            humidityC.innerText = `${humidity} %`;
            locationC.innerText = `${name} , ${city}`;
            airPressureC.innerText = `${airPressure} hPa`;
            tempC.innerText = temp | 0;
            minTempC.innerText = `${min | 0} °F`;
            maxTempC.innerText = `${max | 0} °F`;
            weatherC.innerText = weather;
            togleImages(weather);
            console.log(
              `name: ${name} - City:${city}-Weather:${weather} - Lat: ${lat} -   Lon: ${lon} - Temp:${temp} - Max: ${max} - Min: ${min} - Wind: ${windSpeed}`
            );
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
