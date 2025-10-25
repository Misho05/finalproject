
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext'; 
import { BsCartFill } from "react-icons/bs"; 
import { FaUser } from "react-icons/fa6"; 
import { FaSearch } from "react-icons/fa"; 

function Navbar() {
  const { getItemCount } = useCart();
  const { searchTerm, setSearchTerm } = useProducts();

  
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

  
        <div className="nav-search">
          <FaSearch className="search-icon" />
          <input 
            type="text"
            placeholder="პროდუქტის ძებნა..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
   

        <ul className="nav-links">
          
          <li>
            <NavLink to="/products" className={getDefaultLinkClass}>
              <span>პროდუქტები</span>
            </NavLink>
          </li>
          
          
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