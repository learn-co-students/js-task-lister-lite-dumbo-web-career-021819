document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById('tasks')
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = e.target["new-task-description"].value;
    tasks.innerHTML = `
      <li>
        ${newTask}
        <button data-description="${newTask}">X</button>
      </li>` + tasks.innerHTML
  })
  tasks.addEventListener('click', function(e) {
    if (e.target.type === 'submit') {
        e.target.parentElement.remove()
      }
    }
  )
});

