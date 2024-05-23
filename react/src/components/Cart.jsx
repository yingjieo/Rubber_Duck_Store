import React, { useState, useEffect } from 'react';
import CartContent from './CartContent';
// import Cart from './Cart';

function Cart(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data when the component mounts
    retrieveCart();
  }, []);

  const retrieveCart = async () => {
    // Call the retrieve method of your CartContent to get the current cart data
    const response = await CartContent.retrieve();
    if (response.cart) {
      setCart(response.cart);
    }
  };

  const handleRemoveFromCart = async (duck_id) => {
    // Call the remove method of your CartContent to remove the duck from the cart
    const response = await CartContent.remove(duck_id);
    if (response.cart) {
      setCart(response.cart);
    }
  };

  return (
    <div className="container cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.duck_id} className="cart-item">
            <div>Size: {item.size}</div>
            <button onClick={() => handleRemoveFromCart(item.duck_id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;