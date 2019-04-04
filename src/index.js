document.addEventListener("DOMContentLoaded", () => {
  /* users should be able to type a task into the input field
users should be able to click some form of a submit button
the task string that the user provided should appear on the DOM after the submit button has been activated */

  let toDoForm = document.querySelector("#create-task-form");
  let toDoUl = document.querySelector("#tasks");

  toDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let style = "";
    let task = event.target.querySelector('input').value;
    let date = event.target[1].value;
    let priority = event.target[2].value;
    let newTag = document.createElement('li')

    function makeTag() {
      return `${task}<div class="trash">🗑 </div>
        <div class="due-date"> ${date}</div>
        <div class="priority" id="${priority}">${priority}</div>`
    };

    function makeTagText(color) {
      return `<li style="color: ${color};"> ${task}
        <div class="trash">🗑 </div>
        <div class="due-date"> ${date}</div>
        <div class="priority" id="${priority}">${priority}</div>
        </li>`
    };

    if (priority == 'high') {
      toDoUl.innerHTML = makeTagText("red") + toDoUl.innerHTML;
    } else if (priority == 'medium') {
      newTag.style = "color: orange;"
      newTag.innerHTML = makeTag()
      toDoUl.insertBefore(newTag, document.querySelector("#low").parentElement);
    } else if (priority == 'low') {
      toDoUl.innerHTML += makeTagText("green");
    };

  });

  /* A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
As a challenge, implement a sorting functionality that displays the tasks ASC/DESC based on priority
An additional input field (e.g. user, duration, date due)
Ability to edit tasks
Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM*/

toDoUl.addEventListener('click', function(event) {
  if (event.target.className == "trash") {
    event.target.parentElement.remove()
  }
});

});
