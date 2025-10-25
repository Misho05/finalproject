import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { useProducts } from '../context/ProductContext'; 

function Products() {

  const { filteredProducts, loading, error } = useProducts();

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
        
     
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
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