import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "./CartStore/ActionType";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
    const dispatch = useDispatch();
    const Removefromcart = () => {
    //remove the item from the basket
    dispatch({
      type: REMOVE_FROM_CART,
      id: id,
    });
  };
  return (
    <>
      <div className="chechoutproduct">
        <img className="chechoutproduct_img" src={image} alt="" />

        <h3 className="chechoutproduct_title">{title}</h3>
        <div className="chechoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <FaStar />
              </p>
            ))}
        </div>
        <p className="chechoutproduct_price">
          <strong>₹ </strong>
          <strong>{price}</strong>
        </p>

        <button className="remove_btn" onClick={Removefromcart}>Remove From Basket</button>
      </div>
    </>
  );
}

export default CheckoutProduct;
