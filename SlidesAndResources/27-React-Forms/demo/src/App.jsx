import { useState } from 'react'
import './App.css'

function TaskList ({tasks, setTasks}){

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
    <section>
      {tasks.map(taskObj => (
        <div onClick={()=>completeTask(taskObj.id)} className={taskObj.completed ? 'complete': ''} key={taskObj.id}>{taskObj.task}</div>
      ))}
    </section>
  )
}

function App() {
  const [tasks, setTasks] = useState([
    {
        task: 'Complete Puppy Bowl',
        id: 1,
        completed: false
    },
    {
        task: 'Start Block 24A Workshop',
        id: 2,
        completed: false
    },
    {
        task: 'Start Block 25 Workshop',
        id: 3,
        completed: false
    }, 
  ])

  return (
   <div>
    <h1>To Do List</h1>
    <TaskList tasks={tasks} setTasks={setTasks} />
   </div>
  )
}

export default App