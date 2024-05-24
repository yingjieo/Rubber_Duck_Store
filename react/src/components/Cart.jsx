import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Checkout from './Checkout';
import duck_image from '../../../images/rubber_duck.png';

function Cart({ cart, setCart }) {
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item !== itemToRemove);
    setCart(updatedCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((totalPrice, item) => totalPrice + item.price, 0);

  return (
    <div className="container cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.duck_id} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={duck_image} className="card-img" alt="Rubber Duck" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Color: {item.color}</p>
                  <p className="card-text">Size: {item.size}</p>
                  <p className="card-text">
                    Popularity: {Array.from({ length: item.popularity }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />
                    ))}
                  </p>
                  <p className="card-text">Price: ${item.price}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>Total Price: ${totalPrice}</div>
      <Link to="/checkout" className="btn btn-primary mr-2">
        Checkout
      </Link>
      <button className="btn btn-secondary" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;