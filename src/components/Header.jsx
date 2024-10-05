import React from 'react'
import "../styles/styles.css"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


function Header() {
  const {tasks}=useContext(TaskContext)
  return (
    <header>
      <h1>Todos</h1>
      <div className='counter-container'>
        <p>pending: </p>
        <p className='task-counter'>{tasks.length}</p>
      </div>

    </header>
  )
}

export default Header
