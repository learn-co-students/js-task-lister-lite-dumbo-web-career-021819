document.addEventListener("DOMContentLoaded", () => {

  // - users should be able to type a task into the input field
  // - users should be able to click some form of a submit button
  // - the task string that the user provided should appear on the DOM after the submit button has been activated



  const formTag = document.getElementById("create-task-form")

  const inputField = document.getElementById("new-task-description")

  const ulTag = document.getElementById("tasks")
  // debugger;

  formTag.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTaskText = inputField.value;

    ulTag.innerHTML +=
      `<li> ${newTaskText} </li>`

  })
  // console.log(inputField.name)
  // debugger;




























});
