import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-between align-items-start">
          <div className="col-12 col-md-3 mb-4">
            <h4 className="footer-brand">
              𝓒𝓵𝓲𝓬𝓴<span className="half-color">𝓝</span>
              <span className="text-success">𝓒𝓱𝓸𝔀</span>
            </h4>
            <select className="form-select mb-2">
              <option>🌐 India</option>
              <option>🇺🇸 USA</option>
              <option>🇬🇧 UK</option>
            </select>
            <select className="form-select">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h6 className="footer-heading">About</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Report Fraud</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h6 className="footer-heading">For Restaurants</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Partner With Us</a>
              </li>
              <li>
                <a href="#">Apps for You</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h6 className="footer-heading">For You</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h6 className="footer-heading">Social Links</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} 𝓒𝓵𝓲𝓬𝓴𝓝𝓒𝓱𝓸𝔀. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
