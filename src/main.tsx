import React from 'react'
import ReactDOM from 'react-dom/client'
import { CrudApp } from './CrudApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CrudApp />
  </React.StrictMode>,
)
