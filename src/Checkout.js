import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useSelector } from "react-redux";
import Subtotal from "./Subtotal";
function Checkout() {
  const basket = useSelector((state) => state.basket);
  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
