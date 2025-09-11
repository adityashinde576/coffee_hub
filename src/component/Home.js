import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Freshly Brewed Happiness ☕</h1>
        <p>
          Welcome to <span>CoffeeHub</span>, your cozy spot for delicious coffee,
          warm vibes, and delightful conversations.
        </p>
        <button className="explore-btn">Explore Menu</button>
      </div>

      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Coffee Cup"
        />
      </div>
    </section>
  );
}

export default Home;
