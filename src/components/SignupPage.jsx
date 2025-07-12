import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!fullname.trim()) {
      newErrors.fullname = "Full name is required.";
      valid = false;
    }

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

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
      valid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert("Signup successful!");
    }
  };

  return (
    <div className="signup-page-wrapper d-flex align-items-center justify-content-center">
      <div className="signup-card p-5 rounded shadow">
        <Link
          className="navbar-brand custom-brand text-danger mb-3 d-block text-center"
          to="/"
          style={{ fontFamily: "cursive", fontSize: "2.5rem" }}
        >
          𝓒𝓵𝓲𝓬𝓴<span className="half-color">𝓝</span>
          <span className="text-success">𝓒𝓱𝓸𝔀</span>
        </Link>

        <h2 className="mb-4 text-center fw-bold brand-color">Create Account</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label
              htmlFor="fullname"
              className="form-label fw-semibold text-dark"
            >
              Full Name
            </label>
            <input
              type="text"
              className={`form-control input-field ${
                errors.fullname ? "input-error" : ""
              }`}
              id="fullname"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            {errors.fullname && (
              <div className="error-msg">{errors.fullname}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold text-dark">
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
            <label
              htmlFor="password"
              className="form-label fw-semibold text-dark"
            >
              Password
            </label>
            <input
              type="password"
              className={`form-control input-field ${
                errors.password ? "input-error" : ""
              }`}
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <div className="error-msg">{errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label fw-semibold text-dark"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control input-field ${
                errors.confirmPassword ? "input-error" : ""
              }`}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <div className="error-msg">{errors.confirmPassword}</div>
            )}
          </div>

          <button type="submit" className="btn btn-orange w-100 fw-semibold">
            Sign Up
          </button>
        </form>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange fw-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
