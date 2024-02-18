import { useState } from 'react'
//data 
import {taskList} from './data'
//styles
import './App.css'

function App() {
  const [tasks, setTasks] = useState(taskList)

   const completeTask = taskId => {
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task
      }
    })

    setTasks(updatedTasks)
  }
  return (
   <div>
    <h1>To Do List</h1>
    <section>
      {tasks.map(taskObj => (
        <div onClick={()=>completeTask(taskObj.id)} className={taskObj.completed ? 'complete': ''} key={taskObj.id}>{taskObj.task}</div>
      ))}
    </section>
   </div>
  )
}

export default App
