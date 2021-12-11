const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo")
const cardBody = document.querySelectorAll(".card-body")[0]
const cardBody2 = document.querySelectorAll(".card-body")[1]
const todoList = document.querySelector(".list-group")
const clearTodos = document.getElementById("clear-todos")

EventListeners();

function EventListeners(){
  form.addEventListener("submit",addTodo)



}


function addTodo(e){
  const newTodo = todoInput.value

  todoGonder(newTodo) // (gelenTodo === newTodo) ya eşitleniyor

  e.preventDefault();
}

function todoGonder(gelenTodo) {

  const listItem = document.createElement("li")
  const link = document.createElement("a")
  link.href = "#";
  link.className = "delete-item"
  link.innerHTML = "<i class='fa fa-remove'></i>";

  listItem.className = "list-group-item d-flex justify-content-between";

  // text node

  listItem.appendChild(document.createTextNode(gelenTodo));
  listItem.appendChild(link)

  // todo liste list itemi ekleme
  todoList.appendChild(listItem)












}
