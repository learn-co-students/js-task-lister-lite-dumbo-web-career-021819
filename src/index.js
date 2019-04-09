// Tags
const formTag = document.querySelector('form#create-task-form');
const ulTag = document.querySelector('ul#tasks');


// Helper Functions
const createListItem = task => {
  return `<li>${task} <button class="delete">❌</button></li>`;
};


document.addEventListener("DOMContentLoaded", () => {

  formTag.addEventListener('submit', event => {
    event.preventDefault();
    let task = document.getElementById('new-task-description').value;
    ulTag.innerHTML += createListItem(task);
  });

  ulTag.addEventListener('click', event => {
    if (event.target.className === "delete") {
      let currentDeleteBtn = event.target;
      currentDeleteBtn.parentElement.remove();
    }
  });

});
