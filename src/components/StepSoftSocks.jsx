import React from "react";
import "./Products.css";

function StepSoftSocks({ item, increase, decrease, remove }) {
  return (
    <div className="product">
      <img src={item.img} alt={item.title} className="product-img" />

      <div className="product-details">
        <h3>{item.title}</h3>
        <p>{item.variant}</p>
        <p>{item.description}</p>

        <div className="qty-price-row">
          <div className="qty-row">
            <button onClick={decrease}>-</button>
            <span>{item.qty}</span>
            <button onClick={increase}>+</button>

            <button className="remove" onClick={remove}>
              Remove
            </button>
          </div>

          <h4 className="price">
            ${(item.price * item.qty).toFixed(2)}
            <span className="old-price">$25</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default StepSoftSocks;
