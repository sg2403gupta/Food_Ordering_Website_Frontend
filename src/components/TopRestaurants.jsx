import React from "react";
import "./TopRestaurants.css";

import rest1 from "../assets/food/rest1.jpg";
import rest2 from "../assets/food/rest2.jpg";
import rest3 from "../assets/food/rest3.jpg";
import rest4 from "../assets/food/rest4.jpg";
import rest5 from "../assets/food/rest5.jpg";
import rest6 from "../assets/food/rest6.jpg";
import rest7 from "../assets/food/rest7.jpg";
import rest8 from "../assets/food/rest8.jpg";
import rest9 from "../assets/food/rest9.jpg";
import rest10 from "../assets/food/rest10.jpg";

const restaurants = [
  {
    name: "The Spice Route",
    city: "Delhi",
    image: rest1,
    description:
      "Experience rich Indian flavors and authentic spices in a cozy ambiance.",
  },
  {
    name: "Urban Tadka",
    city: "Mumbai",
    image: rest2,
    description:
      "Modern take on traditional Indian dishes with a vibrant dining experience.",
  },
  {
    name: "Café Chennai",
    city: "Chennai",
    image: rest3,
    description:
      "Savor the taste of South Indian delicacies served fresh with passion.",
  },
  {
    name: "Tandoori Nights",
    city: "Kolkata",
    image: rest4,
    description:
      "Delight in classic tandoori and grilled dishes cooked to perfection.",
  },
  {
    name: "Masala Magic",
    city: "Bangalore",
    image: rest5,
    description:
      "A fusion of traditional and contemporary Indian cuisine in a chic setting.",
  },
  {
    name: "Royal Rasoi",
    city: "Jaipur",
    image: rest6,
    description:
      "Enjoy royal Rajasthani meals inspired by centuries-old recipes.",
  },
  {
    name: "Coastal Cravings",
    city: "Goa",
    image: rest7,
    description:
      "Fresh seafood and coastal flavors with a beachside vibe and relaxed feel.",
  },
  {
    name: "Delhi Zaika",
    city: "Delhi",
    image: rest8,
    description:
      "Street food style dishes that pack a punch with authentic northern tastes.",
  },
  {
    name: "Biryani Blues",
    city: "Hyderabad",
    image: rest9,
    description:
      "Specializing in aromatic biryanis and flavorful Mughlai dishes.",
  },
  {
    name: "The Chaat House",
    city: "Lucknow",
    image: rest10,
    description:
      "Serving lip-smacking chaat and snacks from the heart of Awadh cuisine.",
  },
];

const TopRestaurants = () => {
  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold" style={{ color: "#BF360C" }}>
        Top Restaurants
      </h3>
      <div className="horizontal-scroll d-flex gap-4 overflow-auto pb-3">
        {restaurants.map((rest, idx) => (
          <div key={idx} className="restaurant-card">
            <img src={rest.image} alt={rest.name} className="restaurant-img" />
            <div className="restaurant-info">
              <h5 className="restaurant-name">{rest.name}</h5>
              <p className="restaurant-city">{rest.city}</p>
              <p className="restaurant-desc">{rest.description}</p>
              <button className="btn-book">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
