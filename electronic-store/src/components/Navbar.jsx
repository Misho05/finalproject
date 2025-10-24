import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BsCartFill } from "react-icons/bs"; 
import { FaUser } from "react-icons/fa6"; // <-- fa6

function Navbar() {
  const { getItemCount } = useCart();

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <NavLink to="/" className="nav-brand">
          TechStore
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/products" className={getNavLinkClass}>
              <span>პროდუქტები</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/login" className={getNavLinkClass}>
              <FaUser /> 
              <span>შესვლა</span>
            </NavLink>
          </li>

          <li >
            <NavLink to="/cart" className={getNavLinkClass + ' nav-cart-link'}>
              <BsCartFill /> 
              <span className="cart-text">კალათა</span> 
              <span className="cart-count">{getItemCount()}</span>
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;