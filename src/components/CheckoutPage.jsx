import React from "react";
import "./CheckoutPage.css";

const CheckoutPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 199) * item.qty,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4 checkout-title">Checkout</h2>

      {cartItems.length === 0 ? (
        // Empty message outside the styled container
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <div className="checkout-container shadow-sm rounded p-4">
          <div className="table-responsive">
            <table className="table align-middle checkout-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="checkout-row">
                    <td>
                      <img
                        src={item.image || "https://via.placeholder.com/60"}
                        alt={item.name}
                        className="checkout-item-image rounded"
                      />
                    </td>
                    <td className="checkout-item-name">{item.name}</td>
                    <td className="text-danger">₹{item.price}</td>
                    <td>
                      <div className="d-flex align-items-center quantity-controls">
                        <button
                          className="btn btn-sm btn-outline-secondary quantity-btn"
                          onClick={() =>
                            updateQuantity(item.name, item.qty - 1)
                          }
                        >
                          -
                        </button>
                        <span className="mx-2 quantity-text">{item.qty}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary quantity-btn"
                          onClick={() =>
                            updateQuantity(item.name, item.qty + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-danger">₹{item.qty * item.price}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger remove-btn"
                        onClick={() => removeFromCart(item.name)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-end mt-4">
            <h4 className="total-price">Total: ₹{totalPrice}</h4>
            <button className="btn btn-success proceed-btn">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
