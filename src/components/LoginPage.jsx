import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="login-page-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card p-5 rounded shadow">
        <Link
          className="navbar-brand custom-brand text-danger mb-4 d-block text-center"
          to="/"
        >
          𝓒𝓵𝓲𝓬𝓴<span className="half-color">𝓝</span>
          <span className="text-success">𝓒𝓱𝓸𝔀</span>
        </Link>
        <h2 className="mb-4 text-center fw-bold brand-color">Login</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className={`form-control input-field ${
                errors.email ? "input-error" : ""
              }`}
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="error-msg">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className={`form-control input-field ${
                errors.password ? "input-error" : ""
              }`}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <div className="error-msg">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-orange w-100 fw-semibold">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange fw-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
