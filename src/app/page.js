'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Hero from '@/components/hero.js'
import InputBar from '@/components/inputBar'
import TodoTable from '@/components/todoTable'

export default function Home() {

  const initialTodos = []
  const [todoItems, setTodoItems] = useState(initialTodos)

  function addTodoItem(newTodoItem) {
    setTodoItems([...todoItems, newTodoItem])
  }

  function completeTodoItem(targetTodoId) {
    const localTodos = [...todoItems]
    localTodos.forEach((todo) => {
      if (todo.id === targetTodoId) {
        todo.isCompleted = !todo.isCompleted
      }
    })
    setTodoItems(localTodos)
  }

  function deleteTodoItem(targetTodoId) {
    setTodoItems(todoItems.filter(item => item.id !== targetTodoId))
  }

  return (
    <main className={styles.main}>
      <Hero></Hero>
      <InputBar todoItems={todoItems} addTodoItem={addTodoItem}></InputBar>
      <TodoTable todoItems={todoItems} completeTodoItem={completeTodoItem} deleteTodoItem={deleteTodoItem}></TodoTable>
    </main>
  )
}
