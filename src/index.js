
const add_task_form = document.querySelector('#create-task-form');
const priority_dropdown = document.querySelector('#priority-dropdown');
let task_list = document.querySelector('#tasks');


add_task_form.addEventListener('submit', function(e){
  e.preventDefault();
  let task = add_task_form.querySelector('#new-task-description').value;
  let priority = priority_dropdown[priority_dropdown.selectedIndex].value;
  let new_task = document.createElement('LI');
  new_task.innerText = task;
  new_task.style.color = priority;
  let delete_button = document.createElement("BUTTON")
  delete_button.innerText = "Delete"
  new_task.append(delete_button)
  task_list.append(new_task);
});

task_list.addEventListener('click', function(e){
  if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
  };
});
