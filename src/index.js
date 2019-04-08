document.addEventListener("DOMContentLoaded", () => {

const formTag = document.body.querySelector('form#create-task-form');
toDoUlTag = document.body.querySelector('ul#tasks');

formTag.addEventListener('submit', event => {
  event.preventDefault();
  const inputTag = event.target.querySelector('input#new-task-description');
  createNewLi(inputTag.value);
  inputTag.value = '';
})

toDoUlTag.addEventListener('click', event => {
  if (event.target.className === 'deleteButton') {
    event.target.parentElement.remove();
  }
})

});


const createNewLi = (eventValue) => {
  toDoUlTag.innerHTML +=  `<li>${eventValue} <button class="deleteButton">X</button></li>`;
}
