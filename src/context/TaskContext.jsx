import { createContext, useState, useEffect} from "react"
import {tasks as taskData} from '../data/taskData'

// create a context
export const TaskContext = createContext()

// Create a provider component
export function TaskContextProvider({children}) {
  const [tasks,setTasks]= useState([]);

  function createTask(task){
    setTasks([...tasks,{
    title:task.title, 
    id:tasks.length, 
    description:task.description
    }])
  }

  function deleteTask (taskId){
    setTasks(tasks.filter(task=>task.id !== taskId))
  }

  useEffect(()=>{
    setTasks(taskData)
  },[])


  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }
    }>
      {children}
    </TaskContext.Provider>
  )
}

