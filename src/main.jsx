import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { ToastProvider } from 'react-toast-notifications'
import Modal from './page/shared/Modal/Modal'
import PrivateRoute from './Routes/PrivateRout/PrivateRoute'
<script>
    AOS.init();
  </script>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider><RouterProvider router={router} />  <Modal/></AuthProvider>
    </ToastProvider>
    <Toaster />
   
  </React.StrictMode>,
)
