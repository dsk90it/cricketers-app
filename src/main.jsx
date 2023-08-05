import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/main.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <main className="mx-auto px-4 max-w-2xl">
      <App />
    </main>
  </React.StrictMode>
)
