import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard.jsx';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = PRODUCTS.filter(product => {
    if (selectedCategory === 'all') {
      return true; 
    }
    return product.category === selectedCategory;
  });

  return (
    <div className="products-page">
      <h2>ჩვენი პროდუქცია</h2>
      
      <div className="filters">
        <button onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? 'active' : ''}>ყველა</button>
        <button onClick={() => setSelectedCategory('laptops')} className={selectedCategory === 'laptops' ? 'active' : ''}>ლეპტოპები</button>
        <button onClick={() => setSelectedCategory('components')} className={selectedCategory === 'components' ? 'active' : ''}>კომპონენტები</button>
        <button onClick={() => setSelectedCategory('accessories')} className={selectedCategory === 'accessories' ? 'active' : ''}>აქსესუარები</button>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>ამ კატეგორიაში პროდუქტები არ მოიძებნა.</p>
        )}
      </div>
    </div>
  );
}

export default Products;