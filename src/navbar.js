function showNavbar() {
  const element = document.createElement('div');
  element.id = 'navcontent';
  document.body.appendChild(element);
  alert('this navbar');
  return element;
}

export default showNavbar;
