import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Error from './routes/Error/Erro404.jsx'
import EditarProduto from './routes/EditarProduto/EditarProduto.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
