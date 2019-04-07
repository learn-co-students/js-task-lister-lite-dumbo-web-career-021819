document.addEventListener("DOMContentLoaded", () => {
  // your code here
  getForm();

});



function getForm() {
  let f = document.getElementById('create-task-form');
  let v = document.getElementById('new-task-description');

  f.addEventListener('submit', (event) => {
    event.preventDefault();
    let u = document.getElementById('tasks');
    u.innerHTML += `<li>${v.value}</li>`;
    v.value = "";
    // alert("test");
  });
}
