import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-wrapper py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-orange">About Us</h2>
        <p className="lead text-center text-muted mb-5">
          Welcome to ClickNChow – your favorite online food delivery platform!
        </p>
        <div className="row justify-content-center">
          <div className="col-md-10 bg-white p-4 rounded shadow">
            <p>
              At <span className="fw-bold text-orange">ClickNChow</span>, our
              mission is to bring the joy of delicious meals to your doorstep
              with just a few clicks. From local street food to gourmet meals,
              we connect you with the best restaurants in town.
            </p>
            <p>
              Whether you're craving comfort food or exploring new cuisines, our
              easy-to-use platform ensures a smooth ordering experience. We
              believe food is not just about taste—it's about connection,
              culture, and care.
            </p>
            <p>
              Founded by food lovers for food lovers, ClickNChow is here to
              revolutionize how you experience dining at home.
            </p>
            <p className="fw-semibold text-muted">
              Thank you for choosing us. We promise to keep serving
              happiness—one bite at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
