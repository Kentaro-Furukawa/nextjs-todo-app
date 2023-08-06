import TodoRow from "./todoRow"

export default function TodoTable({ todoItems, completeTodoItem, deleteTodoItem }) {
  let todoRows = []

  todoRows = todoItems.map( todoItem => 
    <TodoRow key={todoItem.id} todoItem={todoItem} completeTodoItem={completeTodoItem} deleteTodoItem={deleteTodoItem} />
  )

  return (
    <div>
      {todoRows}
    </div>
  )
}