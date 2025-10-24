import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity, getCartTotal } = useCart();


  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>თქვენი კალათა ცარიელია</h2>
        <Link to="/products" className="btn">პროდუქტების ნახვა</Link>
      </div>
    );
  }

  
  return (
    <div className="cart-page">
      <h2>თქვენი კალათა</h2>
      <div className="cart-items-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img 
              src={item.image} 
              alt={item.title} 
              className="cart-item-image" 
            />
            <div className="cart-item-details">
              <h3>{item.title}</h3> 
              <p>{item.price.toFixed(2)} ₾</p>
              <div className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <p>ჯამი: {(item.price * item.quantity).toFixed(2)} ₾</p>
            </div>
            <button 
              className="btn-remove"
              onClick={() => removeFromCart(item.id)}
            >
              წაშლა
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>სულ ჯამი: {getCartTotal()} ₾</h3>
        <button className="btn btn-primary">გადახდა</button>
      </div>
    </div>
  );
}

export default Cart;