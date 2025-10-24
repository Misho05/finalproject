import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams(); // ვიღებთ ID-ს URL-დან
  const { addToCart } = useCart();

  // ვპოულობთ პროდუქტს ID-ით
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>პროდუქტი არ მოიძებნა</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-detail-desc">{product.description}</p>
        <p className="product-detail-price">{product.price.toFixed(2)} ₾</p>
        <button 
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          კალათაში დამატება
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;