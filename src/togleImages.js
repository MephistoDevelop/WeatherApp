function changeImages(weather) {
  const mainImage = document.getElementById('main-image');
  if (weather === 'Haze') {
    mainImage.src = './img/animated/cloudy-day-1.svg';
  }
  if (weather === 'Clouds') {
    mainImage.src = './img/animated/cloudy-day-1.svg';
  }

  if (weather === 'Rain') {
    mainImage.src = './img/animated/rainy-2.svg';
  }

  if (weather === 'Clear') {
    mainImage.src = './img/animated/day.svg';
  }

  if (weather === 'Snow') {
    mainImage.src = './img/animated/snowy-4.svg';
  }
}

export default changeImages;
