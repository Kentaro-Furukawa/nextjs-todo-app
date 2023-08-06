import TodoRow from "./todoRow"

export default function TodoTable({ todoItems }) {
  let todoRows = []

  todoRows = todoItems.map( todoItem => 
    <TodoRow todoItem={todoItem} />
  )

  return (
    <div>
      {todoRows}
    </div>
  )
}