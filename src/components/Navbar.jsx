import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const location = useLocation();

  useEffect(() => {
    const collapseEl = document.getElementById("navbarContent");
    if (collapseEl && collapseEl.classList.contains("show")) {
      const bsCollapse =
        Collapse.getInstance(collapseEl) || new Collapse(collapseEl);
      bsCollapse.hide();
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container px-4">
        <Link
          className="navbar-brand custom-brand"
          to="/"
          aria-label="Go to homepage"
        >
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
            />
            <button className="btn btn-danger rounded-end" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 align-items-center">
            {["about", "contact", "login", "signup"].map((path) => (
              <li key={path} className="nav-item">
                <Link className="nav-link" to={`/${path}`}>
                  {path === "signup"
                    ? "Sign Up"
                    : path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}

            <li className="nav-item position-relative">
              <Link className="nav-link" to="/checkout">
                <i className="bi bi-cart3"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
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
