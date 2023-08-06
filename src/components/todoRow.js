export default function TodoRow({todoItem}) {
  return (
    <li key={todoItem.id}>
      { todoItem.isCompleted ? (<s>{todoItem.task}</s>) : (<span>{todoItem.task}</span>)}
      <button>Complete</button>
      <button>Delete</button>
    </li>
  )
}