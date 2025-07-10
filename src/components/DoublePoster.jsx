import React from "react";
import poster1 from "../assets/food/poster1.jpg"; // pizza
import poster2 from "../assets/food/poster2.jpg"; // burger
import "./DoublePoster.css";

const DoublePoster = () => {
  return (
    <div className="doubleposter-container container py-4 d-flex flex-column flex-md-row gap-3">
      {/* LEFT POSTER (Pizza) */}
      <div className="doubleposter-wrapper">
        <img src={poster1} alt="Pizza poster" className="doubleposter-img" />
        <div className="poster-text-overlay left">
          <h2 className="poster-title">PIZZA PARTY DEAL!</h2>
          <p className="poster-subtitle">🍕 Flat 50% OFF on 2nd Pizza</p>
          <p className="poster-desc">
            Free garlic bread + extra cheese crusts on all large orders.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      {/* RIGHT POSTER (Burger) */}
      <div className="doubleposter-wrapper">
        <img src={poster2} alt="Burger poster" className="doubleposter-img" />
        <div className="poster-text-overlay right">
          <h2 className="poster-title">BURGER BONANZA!</h2>
          <p className="poster-subtitle">🍔 Buy 1 Get 1 Free</p>
          <p className="poster-desc">
            Add fries & coke at ₹49 only. Hot, juicy & loaded!
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default DoublePoster;
