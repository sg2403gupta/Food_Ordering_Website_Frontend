import React from "react";
import "./AdBanner.css";

const AdBanner = () => {
  return (
    <div className="adbanner-wrapper">
      <div className="adbanner-content">
        <h2 className="adbanner-title">🔥 Exclusive Food Deals</h2>
        <p className="adbanner-text">
          Get up to <strong>50% OFF</strong> on your favorite meals! Order now
          and enjoy fast delivery and fresh food straight from your favorite
          restaurants.
        </p>
        <a href="#offers" className="adbanner-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AdBanner;
