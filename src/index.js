import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import UserContexts from './contexts/UserContexts'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>

    <UserContexts>
      <ToastContainer position='top-center' />
      <App />
    </UserContexts>

  </>
)
