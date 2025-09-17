import React, { useState } from "react";
import "./Order.css";

function Order() {
  const [coffee, setCoffee] = useState("Espresso");
  const [size, setSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      setError("Quantity must be at least 1.");
      setSuccess(false);
      return;
    }
    setError("");
    const newOrder = {
      coffee,
      size,
      quantity,
      total: quantity * (size === "Small" ? 100 : size === "Medium" ? 150 : 200),
    };
    setOrder(newOrder);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  const handleReset = () => {
    setCoffee("Espresso");
    setSize("Small");
    setQuantity(1);
    setOrder(null);
    setError("");
    setSuccess(false);
  };

  return (
    <div className="order-container">
      <div className="order-box">
        <h2 className="order-title">☕ Coffee Order</h2>
        <form onSubmit={handleSubmit} className="order-form">
          <label htmlFor="coffee">Choose Coffee:</label>
          <select
            id="coffee"
            value={coffee}
            onChange={(e) => setCoffee(e.target.value)}
            className="order-input"
          >
            <option value="Espresso">Espresso</option>
            <option value="Cappuccino">Cappuccino</option>
            <option value="Latte">Latte</option>
            <option value="Mocha">Mocha</option>
          </select>

          <label htmlFor="size">Choose Size:</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="order-input"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="order-input"
          />

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button type="submit" className="order-btn">Place Order</button>
            <button type="button" className="order-btn" onClick={handleReset}>Reset</button>
          </div>
        </form>

        {error && <div className="order-error">{error}</div>}
        {success && <div className="order-success">Order placed successfully!</div>}

        {order && (
          <div className="order-summary">
            <h3>✅ Order Summary</h3>
            <p><strong>Coffee:</strong> {order.coffee}</p>
            <p><strong>Size:</strong> {order.size}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
