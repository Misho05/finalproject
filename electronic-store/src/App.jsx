// src/App.js

import React from 'react';
// Routes, Route-ს დავუმატეთ Navigate
import { Routes, Route, Navigate } from 'react-router-dom'; 

import Navbar from './components/Navbar.jsx';
// Home.jsx იმპორტი აღარ გვჭირდება, რადგან ამ გვერდს ვაუქმებთ
// import Home from './pages/Home.jsx'; 
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          {/* აქ ვცვლით:
            ძველი: <Route path="/" element={<Home />} />
            ახალი: ვამატებთ გადამისამართებას /products-ზე
          */}
          <Route path="/" element={<Navigate to="/products" replace />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
// src/App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'; // <-- დაამატე ეს იმპორტი
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer /> {/* <-- დაამატე ფუთერი აქ */}
    </div>
  );
}

export default App;