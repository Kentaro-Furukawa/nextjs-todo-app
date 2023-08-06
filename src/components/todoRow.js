export default function TodoRow({todoItem, completeTodoItem, deleteTodoItem}) {

  function handleComplete(targetID) {
    completeTodoItem(targetID)
  }

  function handleDelete(targetID) {
    deleteTodoItem(targetID)
  }

  return (
    <li>
      { todoItem.isCompleted ? (<s>{todoItem.task}</s>) : (<span>{todoItem.task}</span>)}
      <button onClick={()=>handleComplete(todoItem.id)}>Complete</button>
      <button onClick={()=>handleDelete(todoItem.id)}>Delete</button>
    </li>
  )
}