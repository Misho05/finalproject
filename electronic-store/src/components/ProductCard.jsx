import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} // .title და არა .name
          className="product-image" 
        />
        <h3 className="product-name">{product.title}</h3> {/* .title და არა .name */}
      </Link>
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