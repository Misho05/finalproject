import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { getItemCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">TechStore</Link>
      <ul className="nav-links">
        <li>
          <Link to="/products">პროდუქტები</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-cart-link">
            კალათა ({getItemCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;