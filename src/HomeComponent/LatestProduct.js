import React from "react";
import LatestProductCard from "./LatestProductCard";
import latest1 from "../Photos/latest1.png";
import "./LatestProduct.css";
function LatestProduct() {
  return (
    <>
      <div className="latest_heading">
        The latest Take a look at what’s new right now.
      </div>
      <div className="container p-5 latest_p">
        <div className="row gx-5 ">
          <div className="col-6 main_card">
            <LatestProductCard
              image={latest1}
              title="HP Pavilion Gaming Laptop"
              detail="AMD Ryzen 5 (8GB/512GB SSD/144Hz/RTX 3050 4GB Graphics/windows 10 Home)"
              price={70450}
            />
          </div>
          <div className="col-6">
            <LatestProductCard
              image={latest1}
              title="HP Pavilion Gaming Laptop"
              detail="AMD Ryzen 5 (8GB/512GB SSD/144Hz/RTX 3050 4GB Graphics/windows 10 Home)"
              price={70450}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProduct;
