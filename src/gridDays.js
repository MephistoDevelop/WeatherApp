function createGridDays() {
  const gridContainer = document.createElement('div');
  gridContainer.id = 'grid-container';
  gridContainer.appendChild(createGridDay1());
  gridContainer.appendChild(createGridDay2());
  gridContainer.appendChild(createGridDay3());
  gridContainer.appendChild(createGridDay4());
  gridContainer.appendChild(createGridDay5());
  return gridContainer;
}

function createGridDay1() {
  const day1C = document.createElement('div');
  const titleDay1C = document.createElement('div');
  const imageDay1C = document.createElement('div');
  const imageDay1 = document.createElement('img');
  const textgrid1Container = document.createElement('div');
  const textNumberG1 = document.createElement('div');
  const textFormatG1 = document.createElement('div');

  day1C.className = 'day-container';

  textNumberG1.textContent = '0';
  textNumberG1.className = 'number-grid';
  textNumberG1.id = 'temp-day1';
  textFormatG1.className = 'format-grid';
  textFormatG1.textContent = '°F';
  titleDay1C.textContent = 'Day 1';
  titleDay1C.className = 'titleday';
  titleDay1C.id = 'title-day1';
  textgrid1Container.style.display = 'flex';
  imageDay1.src = './img/animated/rainy-1.svg';
  imageDay1.className = 'image-day';
  imageDay1.id = 'image-day1';
  imageDay1C.className = 'imageday-container';
  textgrid1Container.className = 'day-description';
  textgrid1Container.appendChild(textNumberG1);
  textgrid1Container.appendChild(textFormatG1);
  imageDay1C.appendChild(imageDay1);
  day1C.appendChild(titleDay1C);
  day1C.appendChild(imageDay1C);
  day1C.appendChild(textgrid1Container);

  return day1C;
}

function createGridDay2() {
  const day1C = document.createElement('div');
  const titleDay1C = document.createElement('div');
  const imageDay1C = document.createElement('div');
  const imageDay1 = document.createElement('img');
  const textgrid1Container = document.createElement('div');
  const textNumberG1 = document.createElement('div');
  const textFormatG1 = document.createElement('div');

  day1C.className = 'day-container';

  titleDay1C.id = 'title-day2';
  textNumberG1.textContent = '0';
  textNumberG1.className = 'number-grid';
  textNumberG1.id = 'temp-day2';
  textFormatG1.className = 'format-grid';
  textFormatG1.textContent = '°F';
  titleDay1C.textContent = 'Day 2';
  titleDay1C.className = 'titleday';
  textgrid1Container.style.display = 'flex';
  imageDay1.src = './img/animated/thunder.svg';
  imageDay1.className = 'image-day';
  imageDay1.id = 'image-day2';
  imageDay1C.className = 'imageday-container';
  textgrid1Container.className = 'day-description';
  textgrid1Container.appendChild(textNumberG1);
  textgrid1Container.appendChild(textFormatG1);
  imageDay1C.appendChild(imageDay1);
  day1C.appendChild(titleDay1C);
  day1C.appendChild(imageDay1C);
  day1C.appendChild(textgrid1Container);

  return day1C;
}

function createGridDay3() {
  const day1C = document.createElement('div');
  const titleDay1C = document.createElement('div');
  const imageDay1C = document.createElement('div');
  const imageDay1 = document.createElement('img');
  const textgrid1Container = document.createElement('div');
  const textNumberG1 = document.createElement('div');
  const textFormatG1 = document.createElement('div');

  day1C.className = 'day-container';
  textNumberG1.textContent = '0';
  textNumberG1.className = 'number-grid';
  textNumberG1.id = 'temp-day3';
  imageDay1.id = 'image-day3';
  textFormatG1.className = 'format-grid';
  textFormatG1.textContent = '°F';
  titleDay1C.textContent = 'Day 3';
  titleDay1C.className = 'titleday';
  titleDay1C.id = 'title-day3';
  textgrid1Container.style.display = 'flex';
  imageDay1.src = './img/animated/snowy-1.svg';
  imageDay1.className = 'image-day';
  imageDay1C.className = 'imageday-container';
  textgrid1Container.className = 'day-description';
  textgrid1Container.appendChild(textNumberG1);
  textgrid1Container.appendChild(textFormatG1);
  imageDay1C.appendChild(imageDay1);
  day1C.appendChild(titleDay1C);
  day1C.appendChild(imageDay1C);
  day1C.appendChild(textgrid1Container);

  return day1C;
}

function createGridDay4() {
  const day1C = document.createElement('div');
  const titleDay1C = document.createElement('div');
  const imageDay1C = document.createElement('div');
  const imageDay1 = document.createElement('img');
  const textgrid1Container = document.createElement('div');
  const textNumberG1 = document.createElement('div');
  const textFormatG1 = document.createElement('div');

  day1C.className = 'day-container';

  textNumberG1.textContent = '0';
  textNumberG1.className = 'number-grid';
  textFormatG1.className = 'format-grid';
  textFormatG1.textContent = '°F';
  titleDay1C.textContent = 'Day 4';
  titleDay1C.className = 'titleday';
  textgrid1Container.style.display = 'flex';
  imageDay1.src = './img/animated/rainy-7.svg';
  imageDay1.className = 'image-day';
  imageDay1C.className = 'imageday-container';
  textgrid1Container.className = 'day-description';
  textgrid1Container.appendChild(textNumberG1);
  textgrid1Container.appendChild(textFormatG1);
  imageDay1C.appendChild(imageDay1);
  day1C.appendChild(titleDay1C);
  day1C.appendChild(imageDay1C);
  day1C.appendChild(textgrid1Container);

  return day1C;
}

function createGridDay5() {
  const day1C = document.createElement('div');
  const titleDay1C = document.createElement('div');
  const imageDay1C = document.createElement('div');
  const imageDay1 = document.createElement('img');
  const textgrid1Container = document.createElement('div');
  const textNumberG1 = document.createElement('div');
  const textFormatG1 = document.createElement('div');

  day1C.className = 'day-container';

  textNumberG1.textContent = '0';
  textNumberG1.className = 'number-grid';
  textFormatG1.className = 'format-grid';
  textFormatG1.textContent = '°F';
  titleDay1C.textContent = 'Day 5';
  titleDay1C.className = 'titleday';
  textgrid1Container.style.display = 'flex';
  imageDay1.src = './img/animated/cloudy-day-1.svg';
  imageDay1.className = 'image-day';
  imageDay1C.className = 'imageday-container';
  textgrid1Container.className = 'day-description';
  textgrid1Container.appendChild(textNumberG1);
  textgrid1Container.appendChild(textFormatG1);
  imageDay1C.appendChild(imageDay1);
  day1C.appendChild(titleDay1C);
  day1C.appendChild(imageDay1C);
  day1C.appendChild(textgrid1Container);

  return day1C;
}
export default createGridDays;
