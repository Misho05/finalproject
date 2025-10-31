import React, { Suspense, lazy } from 'react'; // 1. დავაიმპორტოთ lazy და Suspense
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

// 2. დავა-lazy-ოთ ყველა გვერდი, Navbar-ის გარდა
const Home = lazy(() => import('./pages/Home.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));

// (შექმენი მარტივი "Loading..." კომპონენტი ან გამოიყენე ტექსტი)
const PageLoader = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    იტვირთება...
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* 3. Routes-ს ვფუთავთ Suspense-ში */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
            <Route path="/cart" element={<Cart />} />
            {/* აქ შეგიძლია დაამატო /login რაუტიც */}
            {/* <Route path="/login" element={<div>Login Page</div>} /> */}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;