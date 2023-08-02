import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((product) => product !== productToRemove));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrease = (item) => {
    const updatedCartItems = cartItems.map((product) => {
      if (product.title === item.title) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrease = (item) => {
    const updatedCartItems = cartItems.map((product) => {
      if (product.title === item.title && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, calculateTotalPrice, handleIncrease, handleDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };