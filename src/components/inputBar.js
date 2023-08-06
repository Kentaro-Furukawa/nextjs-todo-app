import ToDoItem from "@/lib/todoItem"
import uuidv4 from "@/lib/uuidv4"

export default function InputBar({ addTodoItem }) {

  function onClickAdd() {
    const todoInput = document.getElementById('todoInput')
    const inputValue = todoInput.value.trim()

    if (inputValue.length  === 0 ){
      clearInputField(todoInput)
      return
    } 

    const newTodoItem = new ToDoItem(uuidv4(),inputValue,false)
    addTodoItem(newTodoItem)

    clearInputField(todoInput)
  }

  function clearInputField(element) {
    element.value = ''
  }

  return (
    <div>
      <input id="todoInput" type="text" placeholder="Add new todo"></input>
      <button onClick={ onClickAdd }>Add</button>
    </div>
  )
}