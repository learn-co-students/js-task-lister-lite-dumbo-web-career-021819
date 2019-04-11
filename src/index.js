document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasksUlTag = document.querySelector('#tasks')
  let formTag = document.querySelector('form')
  let taskLiTag = (task) => {
    return `<li>${task}
    <button>X</button
    </li>`
  }

  formTag.addEventListener('submit', (event) => {
    event.preventDefault();
    let submitButton = document.querySelector('.submit-btn')
    if ( event.target.lastElementChild === submitButton) {
      let newTask = document.querySelector('#new-task-description').value
      tasksUlTag.innerHTML += taskLiTag(newTask)
    }
  })
});
