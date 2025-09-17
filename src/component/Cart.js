import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // State for item sizes
  const [itemSizes, setItemSizes] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.name] = item.size || "Medium";
      return acc;
    }, {})
  );

  const handleSizeChange = (itemName, newSize) => {
    setItemSizes((prev) => ({
      ...prev,
      [itemName]: newSize,
    }));
  };

  // Calculate price based on size
  const getPriceBySize = (basePrice, size) => {
    switch (size) {
      case "Small":
        return basePrice - 5;
      case "Large":
        return basePrice + 5;
      default:
        return basePrice; // Medium
    }
  };

  // Subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = getPriceBySize(item.price, itemSizes[item.name]);
    return total + price * item.quantity;
  }, 0);

  // Delivery fee
  let deliveryFee = 0;
  let freeDelivery = false;
  if (subtotal === 0) {
    deliveryFee = 0;
  } else if (subtotal >= 500) {
    deliveryFee = 0;
    freeDelivery = true;
  } else {
    deliveryFee = 40;
  }

  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items">
          <h1>
            <i className="fas fa-shopping-cart"></i> Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-coffee"></i>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => {
              const itemPrice = getPriceBySize(
                item.price,
                itemSizes[item.name]
              );

              return (
                <div key={index} className="cart-item">
                  <div className="item-details">
                    <div className="item-image">
                      {item.img ? (
                        <img src={item.img} alt={item.name} />
                      ) : (
                        <i className="fas fa-coffee"></i>
                      )}
                    </div>
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p>{item.description || "Delicious coffee blend"}</p>

                      <div className="size-selector">
                        <label>Size: </label>
                        <select
                          value={itemSizes[item.name]}
                          onChange={(e) =>
                            handleSizeChange(item.name, e.target.value)
                          }
                        >
                          <option value="Small">Small</option>
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                        </select>
                        <span
                          className={`size-indicator ${itemSizes[
                            item.name
                          ].toLowerCase()}`}
                        >
                          {itemSizes[item.name]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.name)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.name)}
                  >
                    <i className="fas fa-trash"></i> Remove
                  </button>

                  <div className="item-price">
                    <div className="price">₹{itemPrice * item.quantity}</div>
                    <div className="unit-price">₹{itemPrice} each</div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-summary">
          <h2>Price Details</h2>

          <div className="summary-item">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-item">
            <span>Delivery Fee</span>
            <span>{freeDelivery ? "Free 🚚" : `₹${deliveryFee}`}</span>
          </div>

          <div className="summary-item total">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>

          <button className="checkout-btn">Place Order</button>

          <div className="auth-buttons">
            <button className="auth-btn">Sign In</button>
            <button className="auth-btn">Login</button>
          </div>

          <div className="benefits-card">
            <h3>Benefits</h3>
            <ul className="benefits-list">
              <li>
                <i className="fas fa-shipping-fast"></i> Free delivery on orders
                above ₹500
              </li>
              <li>
                <i className="fas fa-coffee"></i> Freshly brewed coffee
              </li>
              <li>
                <i className="fas fa-award"></i> Premium quality beans
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
