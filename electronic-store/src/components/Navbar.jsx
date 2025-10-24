import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BsCartFill } from "react-icons/bs"; 
import { FaUser } from "react-icons/fa6"; // ვიყენებთ fa6-ს

function Navbar() {
  const { getItemCount } = useCart();

  // ეს ფუნქციაა ზოგადი ლინკებისთვის ("პროდუქტები", "შესვლა")
  const getDefaultLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link active' : 'nav-link';
  };

  // ეს ფუნქციაა კალათის ლინკისთვის
  const getCartLinkClass = ({ isActive }) => {
    // ===> ეს არის მთავარი შესწორება ჰედერისთვის <===
    // კლასები უნდა იყოს 'nav-link' (რომ flex-ი იმუშაოს)
    // და 'nav-cart-link' (რომ ფერი და სტილი მიიღოს)
    let classes = 'nav-link nav-cart-link';
    
    if (isActive) {
      classes += ' active'; // ვამატებთ active კლასს თუ გვერდი აქტიურია
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
          {/* 1. პროდუქტების ლინკი */}
          <li>
            <NavLink to="/products" className={getDefaultLinkClass}>
              <span>პროდუქტები</span>
            </NavLink>
          </li>
          
          {/* 2. შესვლის ლინკი */}
          <li>
            <NavLink to="/login" className={getDefaultLinkClass}>
              <FaUser /> 
              <span>შესვლა</span>
            </NavLink>
          </li>

          {/* 3. კალათის ლინკი */}
          <li>
            {/* ვიყენებთ კალათისთვის შექმნილ getCartLinkClass ფუნქციას */}
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