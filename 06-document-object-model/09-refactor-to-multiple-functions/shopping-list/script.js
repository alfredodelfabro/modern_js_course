function createNewItem(item) {
  const li = document.createElement('li');

  const text = createText('Cheese');
  const button = createButton('remove-item btn-link text-red');

  li.appendChild(text);
  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}

function createText(str) {
  const text = document.createTextNode(str);
  return text;
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Cheese');
