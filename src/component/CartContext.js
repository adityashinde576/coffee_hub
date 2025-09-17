import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ➕ Add to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [
          ...prevItems,
          { ...item, price: Number(item.price), quantity: 1 },
        ];
      }
    });
  };

  // ➖ Remove from cart
  const removeFromCart = (name) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.name !== name));
  };

  // 🔼 Increase qty
  const increaseQty = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.name === name ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // 🔽 Decrease qty
  const decreaseQty = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.name === name && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
