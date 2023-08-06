'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Hero from '@/components/hero.js'
import InputBar from '@/components/inputBar'
import TodoTable from '@/components/todoTable'

export default function Home() {

  const [todoItems, setTodoItems] = useState([])

  function addTodoItem(newTodoItem) {
    setTodoItems([...todoItems, newTodoItem])
  }

  function deleteTodoItem(targetTodoId) {
    setTodoItems(todoItems.filter(item => item.id !== targetTodoId))
  }

  return (
    <main className={styles.main}>
      <Hero></Hero>
      <InputBar todoItems={ todoItems } addTodoItem={ addTodoItem }></InputBar>
      <TodoTable todoItems= { todoItems } deleteTodoItem={deleteTodoItem}></TodoTable>
    </main>
  )
}
