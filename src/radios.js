function togleRadioC(
  temp = 0,
  min = 0,
  max = 0,
  tempday1 = 0,
  tempday2,
  tempday3,
  tempday4,
  tempday5
) {
  const radioC = document.getElementById('radio-c');
  const radioF = document.getElementById('radio-f');
  document.getElementById('general-temp').innerText = `${temp | 0}`;
  document.getElementById('temp-format').innerText = '°C';
  document.getElementById('min-temp-text').innerText = `${min} °C`;
  document.getElementById('max-temp-text').innerText = `${max} °C`;
  if (radioC.checked === true) {
    radioF.checked = false;
  }
}

function togleRadioF(
  temp = 0,
  min = 0,
  max = 0,
  tempday1 = 0,
  tempday2 = 0,
  tempday3 = 0,
  tempday4 = 0,
  tempday5 = 0
) {
  const radioC = document.getElementById('radio-c');
  const radioF = document.getElementById('radio-f');
  document.getElementById('general-temp').innerText = `${celsiusToFarenheit(
    temp | 0
  )}`;
  document.getElementById('temp-format').innerText = '°F';
  document.getElementById('min-temp-text').innerText = `${celsiusToFarenheit(
    min | 0
  )} °F`;
  document.getElementById('max-temp-text').innerText = `${celsiusToFarenheit(
    max | 0
  )} °F`;

  //alert(`Soy temp: ${temp} , Day1: ${tempday1}`);
  if (radioF.checked === true) {
    radioC.checked = false;
  }
}

function celsiusToFarenheit(tempC) {
  const F = tempC * (9 / 5) + 32;
  return F | 0;
}

export { togleRadioC, togleRadioF };
