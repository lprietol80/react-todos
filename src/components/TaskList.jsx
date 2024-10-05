import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList() {
  const {tasks}=useContext(TaskContext)

  if (tasks.length===0) {
   return <h1 style={{fontSize:"2rem", color:"#8C4303", textAlign:"center"}}>No hay tareas pendientes</h1>
  }


  return (
    <section>
      <div className="cards-container">
        {
          tasks.map((task)=> (
            <TaskCard key={task.id} task={task}/> 
          )

          )
        }

      </div>
      
    </section>
  )
}

export default TaskList
