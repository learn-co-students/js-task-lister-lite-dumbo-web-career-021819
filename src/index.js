document.addEventListener("DOMContentLoaded", () => {
  // your code here

const form = document.querySelector('#create-task-form')
form.addEventListener('submit', (event)=> {

	document.querySelector('#tasks').innerHTML = `<li>${event.target[0].value}</li>` + document.querySelector('#tasks').innerHTML
event.preventDefault()
form.reset();
})

});
