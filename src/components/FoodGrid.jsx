import React from "react";
import "./FoodGrid.css";

import food1 from "../assets/food/food1.jpg";
import food2 from "../assets/food/food2.jpg";
import food3 from "../assets/food/food3.jpg";
import food4 from "../assets/food/food4.jpg";
import food5 from "../assets/food/food5.jpg";
import food6 from "../assets/food/food6.jpg";
import food7 from "../assets/food/food7.jpg";
import food8 from "../assets/food/food8.jpg";

const defaultIndianItems = [
  {
    name: "Paneer Tikka",
    image: food1,
    price: 150,
    description: "Spicy grilled paneer cubes with veggies.",
  },
  {
    name: "Chicken Biryani",
    image: food2,
    price: 200,
    description: "Aromatic basmati rice with tender chicken.",
  },
  {
    name: "Masala Dosa",
    image: food3,
    price: 100,
    description: "Crispy dosa stuffed with spicy potato filling.",
  },
  {
    name: "Veg Burger",
    image: food4,
    price: 120,
    description: "Loaded with fresh veggies & tangy sauces.",
  },
  {
    name: "Pasta Alfredo",
    image: food5,
    price: 180,
    description: "Creamy pasta with rich Alfredo sauce.",
  },
  {
    name: "Spring Rolls",
    image: food6,
    price: 90,
    description: "Crispy rolls stuffed with veggies.",
  },
  {
    name: "Tandoori Chicken",
    image: food7,
    price: 220,
    description: "Spicy grilled chicken cooked in tandoor.",
  },
  {
    name: "Gulab Jamun",
    image: food8,
    price: 80,
    description: "Sweet soft balls soaked in sugar syrup.",
  },
];

const FoodGrid = ({ cuisine, items, cartItems, addToCart, updateQuantity }) => {
  const foodItems = items || defaultIndianItems;

  const getQuantity = (name) => {
    const found = cartItems.find((item) => item.name === name);
    return found ? found.qty : 0;
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4 fw-bold text-center">{cuisine} Dishes</h3>
      <div className="row g-4 justify-content-center">
        {foodItems.map((item, idx) => {
          const qty = getQuantity(item.name);
          return (
            <div
              key={idx}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <div className="card shadow-sm h-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="card-title">{item.name}</h6>
                  <p className="card-text">{item.description}</p>
                  <p className="text-danger fw-semibold">₹{item.price}</p>

                  {qty === 0 ? (
                    <button
                      className="btn-add-cart mt-auto"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="d-flex align-items-center justify-content-between mt-auto quantity-controls">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          updateQuantity(item.name, Math.max(0, qty - 1))
                        }
                      >
                        –
                      </button>
                      <span className="mx-3 qty-text">{qty}</span>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodGrid;
