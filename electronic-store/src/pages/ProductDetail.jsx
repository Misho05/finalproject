import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams(); 
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('პროდუქტის ჩატვირთვა ვერ მოხერხდა');
        }
        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]); 

  if (loading) {
    return <h2>იტვირთება...</h2>;
  }
  if (error) {
    return <h2>შეცდომა: {error}</h2>;
  }
  if (!product) {
    return <h2>პროდუქტი არ მოიძებნა</h2>;
  }

  return (
    
    <div className="product-detail-container">
      
      <div className="product-detail-image-wrapper">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-detail-image" 
        />
      </div>
      
      <div className="product-detail-info">
        <h1 className="product-detail-title">{product.title}</h1>
        
        <p className="product-detail-price">{product.price.toFixed(2)} ₾</p>
        
        <p className="product-detail-desc">{product.description}</p>
        
     
        <button 
          className="btn"
          onClick={() => addToCart(product)}
        >
          კალათაში დამატება
        </button>
      </div>
      
    </div>
  );
}

export default ProductDetail;