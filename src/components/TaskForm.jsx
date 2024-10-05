import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext";
import "../styles/styles.css"



function TaskForm() {
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const {createTask}= useContext(TaskContext)


 const handleSubmit = (e)=>{
  e.preventDefault();
  createTask({
    title,
    description
  });
  setTitle("");
  setDescription("")
 }
  
  return (
    <section>
      <section className="center-sec">
        <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="title">Task</label>
            <input
            type="text"
            name="title"
            placeholder="Enter the task"
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            required
            autoFocus
            />
            <label htmlFor="description">Description</label>
            <textarea 
            name="description" 
            id="description" 
            placeholder="Describe the task"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            ></textarea>
            <button>
              Save
            </button>
        </form>
        </div>
        
      </section>
    </section>

     

  )
}

export default TaskForm
