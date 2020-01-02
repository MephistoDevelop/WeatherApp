function createGridDays() {
  const gridContainer = document.createElement('div');
  const day1C = document.createElement('div');
  const day2C = document.createElement('div');
  const day3C = document.createElement('div');
  const day4C = document.createElement('div');
  const day5C = document.createElement('div');

  gridContainer.id = 'grid-container';
  day1C.className = 'day-container';
  day2C.className = 'day-container';
  day3C.className = 'day-container';
  day4C.className = 'day-container';
  day5C.className = 'day-container';

  gridContainer.appendChild(day1C);
  gridContainer.appendChild(day2C);
  gridContainer.appendChild(day3C);
  gridContainer.appendChild(day4C);
  gridContainer.appendChild(day5C);

  return gridContainer;
}

export default createGridDays;
