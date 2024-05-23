import React, { useState, useEffect } from 'react';


function Cart({cart}) {
  


  const totalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + item.price, 0
  )
  return (
    <div className="container cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.duck_id} className="cart-item">
            
            <h5 className="card-title">Duck Details</h5>
            <div className="card-text">Color: {item.color}</div>
            <div className="card-text">Size: {item.size} </div>
            <div className="card-text">Material: {item.material} </div>
            <div className="card-text">Animal: {item.animal}</div>
            <div className="card-text">Pattern: {item.pattern}</div>
            <div className="card-text">Theme: {item.theme}</div>
            <div className="card-text">Price: ${item.price}</div>
            
           
          </div>
          
        ))}
      </div>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
}

export default Cart;