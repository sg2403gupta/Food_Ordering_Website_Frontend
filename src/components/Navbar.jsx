import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure this path is correct

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container px-4">
        {/* Logo without hover effect */}
        <Link className="navbar-brand custom-brand " to="/">
          <span className="text-danger">𝓒𝓵𝓲𝓬𝓴</span>
          <span className="half-color">𝓝</span>
          <span className="text-success">𝓒𝓱𝓸𝔀</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form
            className="d-flex mx-auto w-50"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control rounded-start"
              type="search"
              placeholder="Search food..."
              aria-label="Search"
            />
            <button className="btn btn-danger rounded-end" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link" to="/checkout" aria-label="Cart">
                <i className="bi bi-cart3"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
