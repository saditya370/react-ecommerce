import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <CartProvider>
        <App />
      </CartProvider>
  </BrowserRouter>
)
