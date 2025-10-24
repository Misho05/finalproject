import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';

function Products() {
  
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        
        
        const response = await fetch('https://fakestoreapi.com/products');
        //ეს არის დაფილტრული მონაცემები ტექნიკისათვის const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        if (!response.ok) {
          throw new Error('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
        
        const data = await response.json();
        setProducts(data); 
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, []); 

 


 
  if (loading) {
    return <div className="products-page"><h2>იტვირთება ტექნიკა...</h2></div>;
  }

  if (error) {
    return <div className="products-page"><h2>შეცდომა: {error}</h2></div>;
  }


  return (
    <div className="products-page">
      <h2>ჩვენი პროდუქცია (ტექნიკა)</h2>
      
     

      <div className="product-list">
        
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>პროდუქტები არ მოიძებნა.</p>
        )}
      </div>
    </div>
  );
}

export default Products;