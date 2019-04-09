document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const ulTag = document.querySelector('ul#tasks');
  const formTag = document.querySelector('form')

  const createToDo = (toDo) => {
    return `<li> ${toDo} </li>`
  }

  formTag.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputValue = event.target.querySelector('input').value
    ulTag.innerHTML += createToDo(inputValue)
  })

});
