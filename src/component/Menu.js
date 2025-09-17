import React, { useContext } from "react";
import "./Menu.css";
import { CartContext } from "../component/CartContext";

function Menu() {
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    {
      name: "Espresso",
      price: 120,
      img: "https://tse2.mm.bing.net/th/id/OIP.rV5J-0y0QvdnpdnyQSjJcwHaE8?pid=Api&P=0&h=180",
    },
    {
      name: "Cappuccino",
      price: 150,
      img: "https://tse2.mm.bing.net/th/id/OIP.tsuo28RWH5EcxN5hhDpwaQHaE8?pid=Api&P=0&h=180",
    },
    {
      name: "Latte",
      price: 160,
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    },
    {
      name: "Mocha",
      price: 180,
      img: "https://tse4.mm.bing.net/th/id/OIP.86frFHvA4HqyQQBgYcJiuwHaE8?pid=Api&P=0&h=180",
    },
    {
      name: "Cold Brew",
      price: 140,
      img: "https://tse3.mm.bing.net/th/id/OIP.pft8F0PUpn38mwzVxFDpnAHaFj?pid=Api&P=0&h=180",
    },
    {
      name: "Iced Coffee",
      price: 130,
      img: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2017/07/a2f0b017f997a658d22182ad6caaed582843960c.jpeg",
    },
  ];

  return (
    <section className="menu" id="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price} Only</p>
            <button onClick={() => addToCart(item)} className="order-btn">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
