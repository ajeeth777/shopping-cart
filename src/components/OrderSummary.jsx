import React, { useState } from "react";
import "./OrderSummary.css";

function OrderSummary({ subtotal }) {
  const [couponInput, setCouponInput] = useState("");
  const [applied, setApplied] = useState(true); // already applied like image

  const discount = applied ? 5 : 0;
  const total = subtotal - discount;

  return (
    <div className="summary-container">
      <h3>Order Summary</h3>

      <div className="row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="row">
        <span>Shipping</span>
        <span className="free">FREE</span>
      </div>

      {/* Applied Coupon (Tag) */}
      {applied && (
        <div className="coupon-applied">
          <span className="code">GR8FRNTND24</span>
          <span className="disc">- $5.00</span>
        </div>
      )}
      <h2>Coupon code</h2>
      {/* Coupon Input */}
      <div className="coupon-box">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
        />
        <button>Apply</button>
      </div>
      {/* SECOND COUPON TAG (under input box) — the missing one */}
      {applied && (
        <div className="coupon-tag">
          <span>GR8FRNTND24</span>
          <button className="remove">×</button>
        </div>
      )}

      {/* Total */}
      <div className="total-row">
        <span>Total</span>
        <span className="total-amt">${total.toFixed(1)}</span>
      </div>

      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default OrderSummary;
