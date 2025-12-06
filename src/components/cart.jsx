import React, { useState } from "react";
import StepSoftSocks from "./StepSoftSocks";
import ElementalSneakers from "./ElementalSneakers";
import AzureShades from "./AzureShades";
import UrbanBucketHat from "./UrbanBucketHat";
import OrderSummary from "./OrderSummary";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "StepSoft Socks",
      variant: "Orange • Extra Small",
      description: "Step into luxury with cloud-like cushioning.",
      price: 22.5,
      qty: 1,
      img: "/images/orangesocks.jpg",
    },
    {
      id: 2,
      title: "Elemental Sneakers",
      variant: "Beige • 6",
      description: "Ground your steps with natural balance and style.",
      price: 80,
      qty: 1,
      img: "/images/sneakers.jpg",
    },
    {
      id: 3,
      title: "Azure Attitude Shades",
      variant: "Blue",
      description: "Bold blue tint with a modern design.",
      price: 45,
      qty: 1,
      img: "/images/sunglass.jpg",
    },
    {
      id: 4,
      title: "Urban Drift Bucket Hat",
      variant: "White",
      description: "Trendy shade for the urban jungle.",
      price: 15,
      qty: 1,
      img: "/images/hat.jpg",
    },
  ]);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="left">
          {cart.map((item) => {
            switch (item.id) {
              case 1:
                return (
                  <StepSoftSocks
                    key={item.id}
                    item={item}
                    increase={() => increaseQty(item.id)}
                    decrease={() => decreaseQty(item.id)}
                    remove={() => removeItem(item.id)}
                  />
                );
              case 2:
                return (
                  <ElementalSneakers
                    key={item.id}
                    item={item}
                    increase={() => increaseQty(item.id)}
                    decrease={() => decreaseQty(item.id)}
                    remove={() => removeItem(item.id)}
                  />
                );
              case 3:
                return (
                  <AzureShades
                    key={item.id}
                    item={item}
                    increase={() => increaseQty(item.id)}
                    decrease={() => decreaseQty(item.id)}
                    remove={() => removeItem(item.id)}
                  />
                );
              case 4:
                return (
                  <UrbanBucketHat
                    key={item.id}
                    item={item}
                    increase={() => increaseQty(item.id)}
                    decrease={() => decreaseQty(item.id)}
                    remove={() => removeItem(item.id)}
                  />
                );
              default:
                return null;
            }
          })}
        </div>

        <div className="right">
          <OrderSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
