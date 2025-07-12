import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PosterSlider from "./components/PosterSlider";
import ExploreMenu from "./components/ExploreMenu";
import DoublePoster from "./components/DoublePoster";
import FoodGrid from "./components/FoodGrid";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import PaymentPage from "./components/PaymentPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HorizontalFoodScroller from "./components/HorizontalFoodScroller";
import TopRestaurants from "./components/TopRestaurants";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

import food12 from "./assets/food/food12.jpg";
import food5 from "./assets/food/food5.jpg";
import food13 from "./assets/food/food13.jpg";

const italianItems = [
  {
    name: "Margherita Pizza",
    image: food12,
    price: 250,
    description: "Classic Italian pizza with fresh mozzarella and basil.",
  },
  {
    name: "Pasta Alfredo",
    image: food5,
    price: 180,
    description: "Creamy pasta with rich Alfredo sauce.",
  },
  {
    name: "Lasagna",
    image: food13,
    price: 300,
    description: "Layered pasta baked with cheese and tomato sauce.",
  },
];

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      if (exists) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.name === name ? { ...item, qty } : item))
    );
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <PosterSlider />
              <ExploreMenu onSelectCuisine={setSelectedCuisine} />

              {selectedCuisine === "Indian" && (
                <div className="bg-light py-4">
                  <FoodGrid
                    cuisine="Indian"
                    cartItems={cartItems}
                    addToCart={addToCart}
                    updateQuantity={updateQuantity}
                  />
                </div>
              )}

              {selectedCuisine === "Italian" && (
                <div className="bg-light py-4">
                  <FoodGrid
                    cuisine="Italian"
                    items={italianItems}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    updateQuantity={updateQuantity}
                  />
                </div>
              )}

              {selectedCuisine &&
                selectedCuisine !== "Indian" &&
                selectedCuisine !== "Italian" && (
                  <div className="bg-light py-4 text-center">
                    <h3 className="text-danger">
                      {selectedCuisine} cuisine - Coming Soon!
                    </h3>
                  </div>
                )}

              <DoublePoster />
              <TopRestaurants />
              <AdBanner />
              <HorizontalFoodScroller
                cuisine="Trending"
                cartItems={cartItems}
                addToCart={addToCart}
                updateQuantity={updateQuantity}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
