import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // პროდუქტის დამატება (ან რაოდენობის გაზრდა)
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // თუ პროდუქტი უკვე კალათაშია, ვზრდით რაოდენობას
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // თუ ახალია, ვამატებთ რაოდენობით 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // პროდუქტის წაშლა კალათიდან
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // პროდუქტის რაოდენობის შემცირება
  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
       const existingItem = prevItems.find(item => item.id === productId);

       if (existingItem.quantity === 1) {
           // თუ 1 ცალია, ვშლით
           return prevItems.filter(item => item.id !== productId); 
       } else {
           // თუ 1-ზე მეტია, ვაკლებთ რაოდენობას
           return prevItems.map(item =>
             item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
           );
       }
    });
  };

  // ჯამური ფასის დათვლა
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // კალათაში ნივთების ჯამური რაოდენობის დათვლა
  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    getCartTotal,
    getItemCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};