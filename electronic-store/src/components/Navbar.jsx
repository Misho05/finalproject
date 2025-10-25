import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BsCartFill } from "react-icons/bs"; 
import { FaUser } from "react-icons/fa6"; 

function Navbar() {
  const { getItemCount } = useCart();

  
  const getDefaultLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  
  const getCartLinkClass = ({ isActive }) => {
   
    let classes = 'nav-link nav-cart-link';
    
    if (isActive) {
      classes += ' active'; 
    }
    return classes;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <NavLink to="/" className="nav-brand">
          TechStore
        </NavLink>

        <ul className="nav-links">
          
          <li>
            <NavLink to="/products" className={getDefaultLinkClass}>
              <span>პროდუქტები</span>
            </NavLink>
          </li>
          
          {/* --- დამატებულია --- */}
          <li>
            <NavLink to="/about" className={getDefaultLinkClass}>
              <span>ჩვენს შესახებ</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/contact" className={getDefaultLinkClass}>
              <span>კონტაქტი</span>
            </NavLink>
          </li>
          {/* --- დასასრული --- */}
          
          
          <li>
            <NavLink to="/login" className={getDefaultLinkClass}>
              <FaUser /> 
              <span>შესვლა</span>
            </NavLink>
          </li>

          
          <li>
          
            <NavLink to="/cart" className={getCartLinkClass}>
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