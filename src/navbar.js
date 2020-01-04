import {
  changeImages,
  togleimagesDay1,
  togleimagesDay2,
  togleimagesDay3,
  togleimagesDay4,
  togleimagesDay5,
} from './togleImages';
import { togleRadioC, togleRadioF } from './radios';

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
  weather = '',
  tempR = 0,
  tempday1 = 0,
  tempday2 = 0,
  tempday3 = 0,
  tempday4 = 0,
  tempday5 = 0;

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
  radioC.id = 'radio-c';
  radioC.addEventListener('click', function() {
    togleRadioC(
      temp,
      min,
      max,
      tempday1,
      tempday2,
      tempday3,
      tempday4,
      tempday5
    );
  });
  radioF.setAttribute('type', 'radio');
  radioF.setAttribute('name', 'radioF');
  radioF.addEventListener('click', function() {
    togleRadioF(
      temp,
      min,
      max,
      tempday1,
      tempday2,
      tempday3,
      tempday4,
      tempday5
    );
  });
  radioF.id = 'radio-f';
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
      getData();
      getDataDay1();
      getDataDay2();
      getDataDay3();
      getDataDay4();
      getDataDay5();
      togleRadioC();
      document.getElementById('radio-c').checked = true;
      document.getElementById('radio-f').checked = false;
    }
  };
  document.getElementById('radio-c').checked = true;
  return element;
}

function getData() {
  let city = document.getElementById('search-box').value;
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&units=metric`,
    { mode: 'cors' }
  )
    .then(function(response) {
      // Successful response :)
      let value = response.json();

      value.then(function(result) {
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
        minTempC.innerText = `${min | 0} °C`;
        min = `${min | 0}`;
        max = `${max | 0}`;
        maxTempC.innerText = `${max | 0} °C`;
        weatherC.innerText = weather;
        changeImages(weather);
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
}

function getDataDay1() {
  let city = document.getElementById('search-box').value;
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&units=metric`,
    { mode: 'cors' }
  )
    .then(function(response) {
      // Successful response :)
      let value = response.json();

      let final = value.then(function(result) {
        let temp = 0,
          date = '',
          weather = '';

        date = result['list'][7]['dt_txt'];
        var days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        var d = new Date(date);
        var dayName = days[d.getDay()];
        temp = result['list'][7]['main']['temp'];
        tempday1 = temp;
        weather = result['list'][7]['weather'][0]['main'];
        const tempC = document.getElementById('temp-day1');
        const weatherC = document.getElementById('title-day1');
        tempC.innerText = temp | 0;
        weatherC.innerText = dayName;
        togleimagesDay1(weather);
      });
    })
    .catch(function(err) {
      // Error :(
      alert('Error in query , try again when your conections improve. ');
    });
}

function getDataDay2() {
  let city = document.getElementById('search-box').value;
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&units=metric`,
    { mode: 'cors' }
  )
    .then(function(response) {
      // Successful response :)
      let value = response.json();

      let final = value.then(function(result) {
        let temp = 0,
          date = '',
          weather = '';

        date = result['list'][15]['dt_txt'];
        var days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        var d = new Date(date);
        var dayName = days[d.getDay()];
        temp = result['list'][15]['main']['temp'];
        tempday2 = temp | 0;
        weather = result['list'][15]['weather'][0]['main'];
        const tempC = document.getElementById('temp-day2');
        const weatherC = document.getElementById('title-day2');
        tempC.innerText = temp | 0;
        weatherC.innerText = dayName;
        togleimagesDay2(weather);
        console.log(`Weather:${weather}  Temp:${temp} date: ${dayName} `);
        console.log(result);
      });
    })
    .catch(function(err) {
      // Error :(
      alert('Error in query , try again when your conections improve. ');
    });
}

function getDataDay3() {
  let city = document.getElementById('search-box').value;
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&units=metric`,
    { mode: 'cors' }
  )
    .then(function(response) {
      // Successful response :)
      let value = response.json();

      let final = value.then(function(result) {
        let temp = 0,
          date = '',
          weather = '';

        date = result['list'][22]['dt_txt'];
        var days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        var d = new Date(date);
        var dayName = days[d.getDay()];
        temp = result['list'][22]['main']['temp'];
        tempday3 = temp | 0;
        weather = result['list'][22]['weather'][0]['main'];
        const tempC = document.getElementById('temp-day3');
        const weatherC = document.getElementById('title-day3');
        tempC.innerText = temp | 0;
        weatherC.innerText = dayName;
        togleimagesDay3(weather);
        console.log(`Weather:${weather}  Temp:${temp} date: ${dayName} `);
        console.log(result);
      });
    })
    .catch(function(err) {
      // Error :(
      alert('Error in query , try again when your conections improve. ');
    });
}

function getDataDay4() {
  let city = document.getElementById('search-box').value;
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&units=metric`,
    { mode: 'cors' }
  )
    .then(function(response) {
      // Successful response :)
      let value = response.json();

      let final = value.then(function(result) {
        let temp = 0,
          date = '',
          weather = '';

        date = result['list'][29]['dt_txt'];
        var days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        var d = new Date(date);
        var dayName = days[d.getDay()];
        temp = result['list'][29]['main']['temp'];
        tempday4 = temp | 0;
        weather = result['list'][29]['weather'][0]['main'];
        const tempC = document.getElementById('temp-day4');
        const weatherC = document.getElementById('title-day4');
        tempC.innerText = temp | 0;
        weatherC.innerText = dayName;
        togleimagesDay4(weather);
        console.log(`Weather:${weather}  Temp:${temp} date: ${dayName} `);
        console.log(result);
      });
    })
    .catch(function(err) {
      // Error :(
      alert('Error in query , try again when your conections improve. ');
    });
}

function getDataDay5() {
  let city = document.getElementById('search-box').value;
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2a34c0d5ae373ea1442c4619767d8f09&units=metric`,
    { mode: 'cors' }
  )
    .then(function(response) {
      // Successful response :)
      let value = response.json();

      let final = value.then(function(result) {
        let temp = 0,
          date = '',
          weather = '';

        date = result['list'][38]['dt_txt'];
        var days = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        var d = new Date(date);
        var dayName = days[d.getDay()];
        temp = result['list'][38]['main']['temp'];
        tempday5 = temp | 0;
        weather = result['list'][38]['weather'][0]['main'];
        const tempC = document.getElementById('temp-day5');
        const weatherC = document.getElementById('title-day5');
        tempC.innerText = temp | 0;
        weatherC.innerText = dayName;
        togleimagesDay5(weather);
        console.log(`Weather:${weather}  Temp:${temp} date: ${dayName} `);
        console.log(result);
      });
    })
    .catch(function(err) {
      // Error :(
      alert('Error in query , try again when your conections improve. ');
    });

  document.getElementById('search-box').value = '';
}
export default showNavbar;
