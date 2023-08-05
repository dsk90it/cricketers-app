import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/main.css'
import { DataContextProvider } from './context/DataContext'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <DataContextProvider>
      <main className="mx-auto px-4 max-w-2xl">
        <App />
      </main>
    </DataContextProvider>
  </React.StrictMode>
)
