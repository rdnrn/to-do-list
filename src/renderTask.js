const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');

function clearItem(item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}

function render(tasks) {
  clearItem(tasksContainer);
  tasks.forEach((task) => {
    const taskItem = document.importNode(taskTemplate.content, true);

    const checkbox = taskItem.querySelector('input');
    checkbox.id = task.id;
    checkbox.classList.add('custom-checkbox');
    checkbox.checked = task.complete;
    const label = taskItem.querySelector('label');
    label.htmlFor = task.id;
    label.append(task.description);
    const trashBtn = taskItem.querySelector('.delete');
    trashBtn.id = task.id;
    tasksContainer.appendChild(taskItem);
  });
}

function focus(e) {
  const clicked = e.target;
  if (clicked.tagName.toLowerCase() === 'li') {
    clicked.classList.toggle('change');
    if (clicked.classList.contains('change')) {
      clicked.style.backgroundColor = '#fffec4';
    } else {
      clicked.style.backgroundColor = '#fff';
    }
  }
}

export { render, tasksContainer, focus };