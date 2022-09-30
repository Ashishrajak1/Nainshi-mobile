import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "./CartStore/ActionType";
function Product({ id, title, image, price, rating }) {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  
  const Addtocart = () => {
    // dispatch the item into the datalayer
    dispatch({
      type: ADD_TO_CART,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  console.log(basket);
  return (
    <>
      <div className="product ">
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
              <p className="f_star_p">
                <FaStar />
              </p>
            ))}
        </div>
        <p className="product_price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </p>
        <button className="add_btn" onClick={Addtocart}>
          Add to Basket
        </button>
      </div>
    </>
  );
}

export default Product;
