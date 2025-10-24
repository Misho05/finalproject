import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams(); // ვიღებთ ID-ს URL-დან
  const { addToCart } = useCart();

  // ვქმნით state-ებს პროდუქტის, ჩატვირთვის და შეცდომისთვის
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ფუნქცია, რომელიც წამოიღებს მონაცემებს
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // ვიყენებთ API-ს კონკრეტული პროდუქტის წამოსაღებად
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('პროდუქტის ჩატვირთვა ვერ მოხერხდა');
        }
        const data = await response.json();
        setProduct(data); // ვინახავთ პროდუქტს state-ში
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // ვასრულებთ ჩატვირთვას
      }
    };

    fetchProduct();
  }, [id]); // [id] ნიშნავს, რომ ეფექტი გაეშვება ყოველ ჯერზე, როცა id შეიცვლება

  // ჩატვირთვის მდგომარეობა
  if (loading) {
    return <h2>იტვირთება...</h2>;
  }

  // შეცდომის მდგომარეობა
  if (error) {
    return <h2>შეცდომა: {error}</h2>;
  }

  // თუ პროდუქტი ვერ მოიძებნა
  if (!product) {
    return <h2>პროდუქტი არ მოიძებნა</h2>;
  }

  // თუ ყველაფერი კარგადაა, ვაჩვენებთ პროდუქტს
  return (
    <div className="product-detail">
      <img 
        src={product.image} 
        alt={product.title} // .title
        className="product-detail-image" 
      />
      <div className="product-detail-info">
        <h1>{product.title}</h1> {/* .title */}
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