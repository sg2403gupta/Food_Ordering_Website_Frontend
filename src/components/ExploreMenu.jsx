import React from "react";
import "./ExploreMenu.css";

const cuisines = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Thai",
  "Japanese",
  "French",
  "Mediterranean",
];

const ExploreMenu = ({ onSelectCuisine }) => {
  return (
    <div className="container py-5" id="menu-section">
      <h2 className="text-center mb-4 fw-bold menu-heading">
        Explore Our Menu
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className="btn-cuisine"
            onClick={() => onSelectCuisine(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
