import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [selectedBank, setSelectedBank] = useState("");
  const navigate = useNavigate();

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful! Thank you for your order.");
    navigate("/");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Complete Your Payment</h2>

      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <label htmlFor="paymentMethod" className="form-label">
          Select Payment Method:
        </label>

        <select
          id="paymentMethod"
          className="form-select payment-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="creditCard">Credit/Debit Card</option>
          <option value="upi">UPI</option>
          <option value="netBanking">Net Banking</option>
          <option value="cashOnDelivery">Cash On Delivery</option>
        </select>

        {paymentMethod === "creditCard" && (
          <>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="form-input mt-3"
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              className="form-input mt-2"
              maxLength={16}
              required
            />
            <div className="card-details-row mt-2">
              <input
                type="text"
                placeholder="Expiry MM/YY"
                className="form-input small-input"
                maxLength={5}
                required
              />
              <input
                type="password"
                placeholder="CVV"
                className="form-input small-input"
                maxLength={3}
                required
              />
            </div>
          </>
        )}

        {paymentMethod === "upi" && (
          <>
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="form-input mt-3"
              required
            />
          </>
        )}

        {paymentMethod === "netBanking" && (
          <>
            <select
              id="bankName"
              className="form-select mt-3"
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Bank Name
              </option>
              <option value="State Bank of India">State Bank of India</option>
              <option value="Bank of Baroda">Bank of Baroda</option>
              <option value="Axis Bank">Axis Bank</option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="ICICI Bank">ICICI Bank</option>
              <option value="Punjab National Bank">Punjab National Bank</option>
              <option value="Canara Bank">Canara Bank</option>
              <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
              <option value="Union Bank of India">Union Bank of India</option>
              <option value="Indian Bank">Indian Bank</option>
            </select>
            <input
              type="text"
              placeholder="Account Number"
              className="form-input mt-2"
              required
            />
          </>
        )}

        <button type="submit" className="btn btn-pay mt-4">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
