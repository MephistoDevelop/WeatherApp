function changeImages(weather) {
  const mainImage = document.getElementById('main-image');
  if (weather === 'Haze') {
    mainImage.src = './img/animated/cloudy-day-1.svg';
  }
}

export default changeImages;
