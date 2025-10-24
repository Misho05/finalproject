import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';

function Products() {
  // ვტოვებთ მხოლოდ ამ state-ებს
  const [products, setProducts] = useState([]); // აქ შევინახავთ API-დან მოსულ პროდუქტებს
  const [loading, setLoading] = useState(true); // ჩატვირთვის ინდიკატორისთვის
  const [error, setError] = useState(null); // შეცდომის დასაჭერად

  // useEffect-ში ვცვლით API მისამართს
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        
        // ----> მთავარი ცვლილება აქ <----
        // ვითხოვთ მხოლოდ "electronics" კატეგორიას
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        
        if (!response.ok) {
          throw new Error('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
        
        const data = await response.json();
        setProducts(data); // ვინახავთ პროდუქტებს state-ში
        setError(null);
      } catch (err) {
        setError(err.message); // ვიჭერთ შეცდომას
      } finally {
        setLoading(false); // ვასრულებთ ჩატვირთვას
      }
    };

    fetchProducts(); // ვიძახებთ ფუნქციას
  }, []); // [] ნიშნავს, რომ ეს ეფექტი გაეშვება მხოლოდ ერთხელ

  // ----> ვიღებთ ფილტრაციის ლოგიკას <----
  // const [selectedCategory, setSelectedCategory] = useState('all');
  // const filteredProducts = ... (ეს კოდი სრულად იშლება)


  // ვამატებთ ჩატვირთვის და შეცდომის შეტყობინებებს
  if (loading) {
    return <div className="products-page"><h2>იტვირთება ტექნიკა...</h2></div>;
  }

  if (error) {
    return <div className="products-page"><h2>შეცდომა: {error}</h2></div>;
  }

  // JSX-შიც ვიღებთ ფილტრაციის ღილაკებს
  return (
    <div className="products-page">
      <h2>ჩვენი პროდუქცია (ტექნიკა)</h2>
      
      {/* <div className="filters"> ... </div> 
        ეს ბლოკი წაიშალა, რადგან ყველა პროდუქტი ისედაც ტექნიკაა
      */}

      <div className="product-list">
        {/* ვამოწმებთ products-ს (და არა filteredProducts-ს) */}
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