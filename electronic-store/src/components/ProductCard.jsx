import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      {/* Link-ში არის მხოლოდ სურათი და სახელი */}
      <Link to={`/products/${product.id}`}>
        <div className="product-image-wrapper">
          <img 
            src={product.image} 
            alt={product.title}
            className="product-image" 
          />
        </div>
        <h3 className="product-name">{product.title}</h3>
      </Link>
      
      {/* ფასი და ღილაკი არის Link-ის გარეთ */}
      <p className="product-price">{product.price.toFixed(2)} ₾</p>
      
      <button 
        className="btn"
        onClick={() => addToCart(product)}
      >
        კალათაში დამატება
      </button>
    </div>
  );
}

export default ProductCard;