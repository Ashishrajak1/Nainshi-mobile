import React from "react";
import "./LatestProductCard.css";
function LatestProductCard({ image, title, detail, price }) {
  return (
    <>
      <div className="latest_card">
        <div className="content">
          <div className="letest_all-text">
            <div className="latest_title">{title}</div>
            <div className="latestproductcard_detail">{detail}</div>
            <div className="latest_product_price">
              <span className="latestproduct_pri">From ₹{price}.00</span>
            </div>
          </div>

          <div className="letest_background">
            <img className="letest_img" src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProductCard;
