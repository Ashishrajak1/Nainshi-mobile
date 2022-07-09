import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
function Product({ id, title, image, price, rating }) {
  return (
    <>
      <div className="product">
        <div className="product_img">
          <div className="bg">
            <img className="img" src={image} alt="" />
          </div>
        </div>
        <h3 className="product_title">{title}</h3>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <FaStar />
              </p>
            ))}
        </div>
        <p className="product_price">
          <strong>{price}</strong>
          <strong> ₹</strong>
        </p>

        <button className="add_btn">Add to Basket</button>
      </div>
    </>
  );
}

export default Product;
