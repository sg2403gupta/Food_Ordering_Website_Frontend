import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-wrapper py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-orange">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you soon.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="contact-form bg-white p-4 rounded shadow">
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control input-field"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control input-field"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control input-field"
                  rows="4"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-orange w-100 fw-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
