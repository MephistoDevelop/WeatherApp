function showContent() {
  const contentContainer = document.createElement('div');
  const descriptionContainer = document.createElement('div');
  const tempContainer = document.createElement('div');
  const textdescriptionContainer = document.createElement('div');
  const gifcontainer = document.createElement('div');
  gifcontainer.id = 'gif-container';
  tempContainer.id = 'temp-container';
  textdescriptionContainer.id = 'text-description';
  descriptionContainer.id = 'description-container';
  contentContainer.id = 'data-container';
  document.body.appendChild(contentContainer);
  contentContainer.appendChild(descriptionContainer);
  descriptionContainer.appendChild(tempContainer);
  descriptionContainer.appendChild(textdescriptionContainer);
  descriptionContainer.appendChild(gifcontainer);
  tempContainer.appendChild(createtempText());
  textdescriptionContainer.appendChild(createhumidityText());
  textdescriptionContainer.appendChild(createAirPressureText());
  textdescriptionContainer.appendChild(createWindspeedText());
  textdescriptionContainer.appendChild(createSunriseText());
  textdescriptionContainer.appendChild(createSunsetText());
}

function createtempText() {
  const textTemp = document.createElement('h1');
  textTemp.id = 'text-temp';
  textTemp.textContent = '0° C';
  return textTemp;
}

function createhumidityText() {
  const descriptionChumidity = document.createElement('div');
  const descriptionCairPressure = document.createElement('div');
  const humidityText = document.createElement('div');
  const humidityData = document.createElement('div');
  const airpressureText = document.createElement('div');
  const windSpeedText = document.createElement('div');
  const sunriseText = document.createElement('div');
  const sunsetText = document.createElement('div');

  descriptionChumidity.className = 'inner-descriptionContainer';
  descriptionCairPressure.className = 'inner-descriptionContainer';

  humidityText.textContent = 'Humidity: ';
  humidityData.textContent = '0%';

  humidityText.style.width = '85%';
  humidityData.style.width = '15%';

  descriptionChumidity.appendChild(humidityText);
  descriptionChumidity.appendChild(humidityData);

  return descriptionChumidity;
}

function createAirPressureText() {
  const descriptionCair = document.createElement('div');
  const airpressureText = document.createElement('div');
  const airpressureData = document.createElement('div');

  descriptionCair.className = 'inner-descriptionContainer';

  airpressureText.textContent = 'Air Pressure: ';
  airpressureData.textContent = '0%';

  airpressureText.style.width = '85%';
  airpressureData.style.width = '15%';

  descriptionCair.appendChild(airpressureText);
  descriptionCair.appendChild(airpressureData);

  return descriptionCair;
}

function createWindspeedText() {
  const descriptionCwind = document.createElement('div');
  const windspeedText = document.createElement('div');
  const windspeedData = document.createElement('div');

  descriptionCwind.className = 'inner-descriptionContainer';

  windspeedText.textContent = 'Wind Speed: ';
  windspeedData.textContent = '0%';

  windspeedText.style.width = '85%';
  windspeedData.style.width = '15%';

  descriptionCwind.appendChild(windspeedText);
  descriptionCwind.appendChild(windspeedData);

  return descriptionCwind;
}

function createSunriseText() {
  const descriptionCsunrise = document.createElement('div');
  const sunriseText = document.createElement('div');
  const sunriseData = document.createElement('div');

  descriptionCsunrise.className = 'inner-descriptionContainer';

  sunriseText.textContent = 'Sunrise: ';
  sunriseData.textContent = '0%';

  sunriseText.style.width = '85%';
  sunriseData.style.width = '15%';

  descriptionCsunrise.appendChild(sunriseText);
  descriptionCsunrise.appendChild(sunriseData);

  return descriptionCsunrise;
}

function createSunsetText() {
  const descriptionCsunset = document.createElement('div');
  const sunsetText = document.createElement('div');
  const sunsetData = document.createElement('div');

  descriptionCsunset.className = 'inner-descriptionContainer';

  sunsetText.textContent = 'Sunset: ';
  sunsetData.textContent = '0%';

  sunsetText.style.width = '85%';
  sunsetData.style.width = '15%';

  descriptionCsunset.appendChild(sunsetText);
  descriptionCsunset.appendChild(sunsetData);

  return descriptionCsunset;
}
export default showContent;
