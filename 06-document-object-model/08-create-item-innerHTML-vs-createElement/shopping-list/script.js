// Quick and Dirty
function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

  document.querySelector('.items').appendChild(li);
}

// Clean and Performant
function createNewItem(item) {
  const li = document.createElement('li');

  const text = document.createTextNode(item);

  const button = document.createElement('button');
  button.classList = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.classList = 'fa-solid fa-xmark';

  li.appendChild(text);
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');
