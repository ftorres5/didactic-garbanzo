import './App.css'
import { useState } from 'react'

function Button ({count, setCount}){
  return <button onClick={()=>setCount(count+1)}>{count}</button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count</p> 
      <Button count={count} setCount={setCount} />
    </div>
  )
}

export default App
