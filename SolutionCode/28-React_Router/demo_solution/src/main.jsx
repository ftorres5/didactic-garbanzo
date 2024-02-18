import React from 'react'
import ReactDOM from 'react-dom/client'
// 👉 STEP 1 - Import BrowserRouter and wrap it around the App component
import { BrowserRouter } from 'react-router-dom'
//components
import App from './App.jsx'
//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
)
