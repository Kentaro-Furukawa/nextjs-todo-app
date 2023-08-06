export default function TodoRow({todoItem, deleteTodoItem}) {

  function onClickDelete(targetID) {
    console.log(targetID)
    deleteTodoItem(targetID)
  }

  return (
    <li key={todoItem.id}>
      { todoItem.isCompleted ? (<s>{todoItem.task}</s>) : (<span>{todoItem.task}</span>)}
      <button>Complete</button>
      <button onClick={()=>onClickDelete(todoItem.id)}>Delete</button>
    </li>
  )
}