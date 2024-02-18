import { useState,useEffect } from 'react'
import './App.css'
//components
import AddTodo from './components/AddTodo'
import TaskList from './components/TaskList'


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function getTasks () {
      const res = await fetch('https://todo-api-ur6k.onrender.com/api/todos')
      const json = await res.json();
      setTasks(json)
    }

    getTasks()
  }, [])

  return (
   <div>
    <h1>To Do List</h1>
    <AddTodo tasks={tasks}  setTasks={setTasks} />
    <TaskList tasks={tasks} setTasks={setTasks} />
   </div>
  )
}

export default App
