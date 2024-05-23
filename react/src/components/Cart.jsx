import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Checkout from './Checkout'
import duck_image from '../../../images/rubber_duck.png';


function Cart({cart, setCart}) {
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item !== itemToRemove)
    setCart(updatedCart)
  }
  const clearCart = () => {
    setCart([])
  }

  const totalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + item.price, 0
  )
  return (
    <div className="container cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.duck_id} className="cart-item">
            <section id='img'>
                <img src={duck_image} />
            </section>
            <h5 className="card-title">{item.name}</h5>
            <div className="card-text">Color: {item.color}</div>
            <div className="card-text">Size: {item.size} </div>
            <div className="card-text">Popularity: {"⭐".repeat(item.popularity)}</div>
            <div className="card-text">Price: ${item.price}</div>
            <button onClick = {() => removeFromCart(item)}>Remove from Cart</button>
            
           
          </div>
          
        ))}
      </div>
      <div>Total Price: ${totalPrice}</div>
      <button>
            <Link to="/checkout">
                  Checkout
            </Link>
            </button>
      <button onClick={(clearCart)}>Clear Cart</button>
    </div>
  );
}

export default Cart;