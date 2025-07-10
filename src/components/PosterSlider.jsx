import React from "react";
import Carousel from "react-bootstrap/Carousel";

import slider1 from "../assets/food/slider1.jpg";
import slider2 from "../assets/food/slider2.jpg";
import slider3 from "../assets/food/slider3.jpg";
import slider4 from "../assets/food/slider4.jpg";
import slider5 from "../assets/food/slider5.jpg";

import "./PosterSlider.css";

const PosterSlider = () => {
  const posters = [
    {
      img: slider1,
      offer: "BEST OFFER",
      tagline: "Tasty Fast Food",
      desc: "Order your favorite meals in just a few clicks with lightning-fast delivery across your city!",
    },
    {
      img: slider2,
      offer: "HOT MEALS",
      tagline: "Fresh & Delicious",
      desc: "Enjoy hot meals delivered from top-rated restaurants, made fresh just for you.",
    },
    {
      img: slider3,
      offer: "FAST DELIVERY",
      tagline: "Within 30 Minutes",
      desc: "No more waiting! Get your food at your doorstep with real-time tracking and 30-min delivery.",
    },
    {
      img: slider4,
      offer: "HEALTHY OPTIONS",
      tagline: "Nutritious & Yummy",
      desc: "Explore a range of healthy meal choices — salads, bowls, and more, all at your fingertips.",
    },
    {
      img: slider5,
      offer: "MEGA SAVINGS",
      tagline: "Flat 50% Off",
      desc: "Grab unbelievable deals and save big every time you order with us!",
    },
  ];

  return (
    <Carousel fade interval={3000} className="mb-4">
      {posters.map((poster, idx) => (
        <Carousel.Item key={idx} className="carousel-item poster-wrapper">
          <img
            src={poster.img}
            alt={`Poster ${idx + 1}`}
            className="poster-img"
          />
          <div className="poster-overlay">
            {/* LEFT SIDE: OFFER & TAGLINE */}
            <div className="poster-left-text">
              <h2 className="offer-heading">{poster.offer}</h2>
              <h3 className="food-heading">{poster.tagline}</h3>
            </div>

            {/* RIGHT SIDE: DESCRIPTION */}
            <div className="poster-right-text">
              <p className="poster-desc">{poster.desc}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PosterSlider;
