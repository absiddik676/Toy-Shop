import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </ToastProvider>
    <Toaster />
  </React.StrictMode>,
)
