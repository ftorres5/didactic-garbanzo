import React from 'react'
import ReactDOM from 'react-dom/client'
// 👉 STEP 1 - Import BrowserRouter and wrap it around the App component
//components
import App from './App.jsx'
//styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
