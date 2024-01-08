const clearBtn = document.querySelector('#clear');

function onClear() {
  // const items = document.querySelector('.items').children;
  // const itemsArray = Array.from(items);
  // itemsArray.forEach(element => {
  //   element.remove();
  // });

  // performance
  const items = document.querySelector('.items');
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }
}

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// }

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// }

// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
