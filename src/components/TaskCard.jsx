import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { BiTask } from "react-icons/bi";




function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext);



  return ( 
    <div className="card">
      <BiTask />
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=> {deleteTask(task.id)}}>Delete</button>
    </div>
  )
}

export default TaskCard
