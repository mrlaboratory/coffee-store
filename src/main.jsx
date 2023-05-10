import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home.jsx'
import AddCoffe from './components/AddCoffe.jsx'
import Edit from './components/Edit.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout></Layout>,
    children : [
      {
        path: '/',
        element : <Home></Home>,
        loader : () => fetch('http://localhost:3000/coffe')
      },
      {
        path :'/add',
        element : <AddCoffe></AddCoffe>
      }, 
      {
        path :'/edit/:id',
        element : <Edit></Edit>,
        loader : ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
