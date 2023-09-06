import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import EditarProduto from './routes/EditarProduto/EditarProduto.jsx'
import Error from './routes/Error/Erro404.jsx'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Home />
        
      },
      {
        path:"/produtos",
        element: <Produtos/>
      },
      {path:'/editar/:id',
      element:<EditarProduto />
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  )
