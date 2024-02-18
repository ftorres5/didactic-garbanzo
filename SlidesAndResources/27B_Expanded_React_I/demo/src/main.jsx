import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// 👉 STEP 1: Import Provider from react-redux
// 👉 STEP 2: Import store from the store.js file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👉 STEP 3: Wrap the App with the Provider setting the imported store as the store prop*/}
    <App />
  </React.StrictMode>,
)
