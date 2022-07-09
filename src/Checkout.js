import React from "react";
import { NavItem } from "react-bootstrap";
import { FaBasketballBall } from "react-icons/fa";

function Checkout() {
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
            
        </div>
      </div>
    </>
  );
}

export default Checkout;
