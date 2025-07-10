import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import PosterSlider from "./components/PosterSlider";
import ExploreMenu from "./components/ExploreMenu";
import DoublePoster from "./components/DoublePoster";
import FoodGrid from "./components/FoodGrid";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HorizontalFoodScroller from "./components/HorizontalFoodScroller";
import TopRestaurants from "./components/TopRestaurants";

// New Pages
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

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
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <PosterSlider />
              <ExploreMenu onSelectCuisine={setSelectedCuisine} />
              {selectedCuisine && (
                <div className="bg-light py-4">
                  <FoodGrid
                    cuisine={selectedCuisine}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    updateQuantity={updateQuantity}
                  />
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

        {/* Other Pages */}
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* New Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
