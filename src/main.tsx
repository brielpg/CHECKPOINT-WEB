import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Components'
import Login from './Pages/Login/Components'
import Cadastro from './Pages/Cadastro/Components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/cadastro',
    element: <Cadastro/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)