const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down click event');
const onMouseUp = () => console.log('mouse up click event');
const onMouseWheel = () => console.log('mouse wheel click event');
const onMouseOver = () => console.log('mouse over click event');
const onMouseOut = () => console.log('mouse out click event');
const onDragStart = () => console.log('dragstart click event');
const onDrag = () => console.log('drag click event');
const onDragEnd = () => console.log('dragend click event');


// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);


