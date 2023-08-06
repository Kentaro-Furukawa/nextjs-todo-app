'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/hero.js'
import InputBar from '@/components/inputBar'
import TodoTable from '@/components/todoTable'
import ToDoItem from '@/lib/todoItem'

export default function Home() {

  const [todoItems, setTodoItems] = useState([])

  function addTodoItem(newTodoItem) {
    setTodoItems([...todoItems, newTodoItem])
  }

  return (
    <main className={styles.main}>
      <Hero></Hero>
      <InputBar todoItems={ todoItems } addTodoItem={ addTodoItem } ></InputBar>
      <TodoTable todoItems= { todoItems }></TodoTable>
    </main>
  )
}
