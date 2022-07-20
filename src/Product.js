import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { useStateValue } from "./contextstore/StateProvider";

function Product({ id, title, image, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();
  // const addToBasket = () => {
  //   //dispatch the item into the datalayer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating,
  //     },
  //   });
  // };
  // console.log(basket);
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
              <p>
                <FaStar />
              </p>
            ))}
        </div>
        <p className="product_price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </p>

        <button className="add_btn">
          {/* onClick={addToBasket} */}
          Add to Basket
        </button>
      </div>
    </>
  );
}

export default Product;
