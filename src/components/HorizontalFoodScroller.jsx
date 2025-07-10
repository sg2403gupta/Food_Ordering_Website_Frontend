import React from "react";
import "./TopRestaurants.css"; // Reusing unified styles

import food12 from "../assets/food/food12.jpg";
import food13 from "../assets/food/food13.jpg";
import food14 from "../assets/food/food14.jpg";
import food15 from "../assets/food/food15.jpg";
import food16 from "../assets/food/food16.jpg";
import food17 from "../assets/food/food17.jpg";
import food18 from "../assets/food/food18.jpg";
import food19 from "../assets/food/food19.jpg";
import food20 from "../assets/food/food20.jpg";
import food21 from "../assets/food/food21.jpg";
import food22 from "../assets/food/food22.jpg";

const items = [
  {
    name: "Margherita Pizza",
    image: food12,
    price: 250,
    description: "Classic Italian pizza with fresh mozzarella and basil.",
  },
  {
    name: "Chicken Teriyaki",
    image: food13,
    price: 300,
    description: "Tender chicken glazed with sweet teriyaki sauce.",
  },
  {
    name: "Pasta Alfredo",
    image: food14,
    price: 280,
    description: "Creamy fettuccine pasta with Parmesan cheese.",
  },
  {
    name: "Veggie Sushi Roll",
    image: food15,
    price: 350,
    description: "Fresh vegetable sushi wrapped in seaweed.",
  },
  {
    name: "Beef Burger",
    image: food16,
    price: 320,
    description: "Juicy beef patty with lettuce, tomato, and cheese.",
  },
  {
    name: "Caesar Salad",
    image: food17,
    price: 200,
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
  },
  {
    name: "Chocolate Cake",
    image: food18,
    price: 180,
    description: "Rich and moist chocolate cake slice.",
  },
  {
    name: "Grilled Salmon",
    image: food19,
    price: 450,
    description: "Salmon fillet grilled to perfection with herbs.",
  },
  {
    name: "Tacos al Pastor",
    image: food20,
    price: 270,
    description: "Spicy pork tacos with pineapple and fresh cilantro.",
  },
  {
    name: "Paneer Tikka",
    image: food21,
    price: 290,
    description: "Marinated paneer cubes grilled with spices.",
  },
  {
    name: "French Fries",
    image: food22,
    price: 150,
    description: "Crispy golden fries with a hint of salt.",
  },
];

const HorizontalFoodScroller = ({
  cuisine = "Popular",
  cartItems,
  addToCart,
  updateQuantity,
}) => {
  const getQuantity = (name) => {
    const found = cartItems.find((item) => item.name === name);
    return found ? found.qty : 0;
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold" style={{ color: "#BF360C" }}>
        {cuisine} Specials
      </h3>
      <div className="horizontal-scroll d-flex gap-4 pb-2">
        {items.map((item, idx) => {
          const qty = getQuantity(item.name);
          return (
            <div key={idx} className="restaurant-card">
              <img
                src={item.image}
                alt={item.name}
                className="restaurant-img"
              />
              <div className="restaurant-info">
                <h5 className="restaurant-name">{item.name}</h5>
                <p className="restaurant-desc">{item.description}</p>
                <p className="text-danger fw-semibold">₹{item.price}</p>

                {qty === 0 ? (
                  <button className="btn-book" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        updateQuantity(item.name, Math.max(0, qty - 1))
                      }
                    >
                      –
                    </button>
                    <span className="mx-2">{qty}</span>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => updateQuantity(item.name, qty + 1)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalFoodScroller;
