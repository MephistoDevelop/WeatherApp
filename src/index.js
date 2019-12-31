function component() {
  const element = document.createElement('div');
  element.textContent = "I'm Webpack working ;D";
  return element;
}

document.body.appendChild(component());
