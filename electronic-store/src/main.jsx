// src/main.jsx (ან index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext'; // <-- დაამატე ეს იმპორტი
import './App.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider> {/* <-- შეფუთე აქ */}
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider> {/* <-- დახურე აქ */}
    </Router>
  </React.StrictMode>
);