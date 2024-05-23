import React from 'react';

const CartContent = React.createContext({
  cart: {},
  setCart: () => {},
  addProductToCart: () => {},
});
export default CartContent;