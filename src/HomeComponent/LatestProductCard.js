import React from "react";

function LatestProductCard() {
  return (
    <>
      <div className="latest_card">
        <div className="letest_background">
          <img className="letest_img" src={image} alt="" />
        </div>
        <div className="latest_title">{title}</div>
        <div className="latest_product_price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </div>
      </div>
    </>
  );
}

export default LatestProductCard;
