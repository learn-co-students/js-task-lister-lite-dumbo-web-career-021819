document.addEventListener("DOMContentLoaded", (event) => {
  // your code here

});

const createTaskHTML = (task) => {
  return `<li>${task}</li>`
}

let tasksId = document.getElementById('tasks')

document.addEventListener("submit", (event) => {
  event.preventDefault();
  tasksId.innerHTML += createTaskHTML(event.target['new-task-description'].value)

  // debugger
} )

// should be able to type a task into field
//   (am i going to be using fetch here)
// should be able to click a submit
//   (???)
// string user typed should be in the DOM
//   (look at notes)



// I have to create a "addEventListener" so that I recognize the submit
// inserting into "task" ul list


// if (event.target.tagName === tasksId.innerTEXT){
//
//   console.log("HEY")
// }
