import TodoRow from "./todoRow"

export default function TodoTable({ todoItems,  deleteTodoItem }) {
  let todoRows = []

  todoRows = todoItems.map( todoItem => 
    <TodoRow todoItem={todoItem} deleteTodoItem={deleteTodoItem} />
  )

  return (
    <div>
      {todoRows}
    </div>
  )
}