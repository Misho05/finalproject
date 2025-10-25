import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        //https://fakestoreapi.com/products/category/electronics'
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
        const data = await response.json();
        setAllProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return allProducts; 
    }
    return allProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allProducts, searchTerm]);

  const value = {
    loading,
    error,
    filteredProducts,
    searchTerm,
    setSearchTerm   };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};