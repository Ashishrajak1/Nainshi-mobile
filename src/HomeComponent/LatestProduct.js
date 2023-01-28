import React from "react";
import LatestProductCard from "./LatestProductCard";
import latest1 from "../Photos/latest1.png";
import latest2 from "../Photos/latest2.png";
import latest3 from "../Photos/latest3.png";

import "./LatestProduct.css";
function LatestProduct() {
  return (
    <>
      <div className="latest_main_container">
        <div className="latest_heading">
          The latest Take a look at what’s new right now.
        </div>
        <div className="container latest_p">
          <div className="latest__row">
            <div className=" main_card">
              <LatestProductCard
                image={latest1}
                title="HP Pavilion Gaming Laptop"
                detail="AMD Ryzen 5 (8GB/512GB SSD/144Hz/RTX 3050 4GB Graphics/windows 10 Home)"
                price={70450}
              />
            </div>
            <div className=" main_card">
              <LatestProductCard
                image={latest2}
                title="OnePlus Nord CE 2 Lite 5G"
                detail="Black Dusk, 8GB RAM, 128GB Storage"
                price={21999}
              />
            </div>
            <div className=" main_card">
              <LatestProductCard
                image={latest3}
                title="Realme 10 Pro+ 5G"
                detail="Nebula Blue, 6GB RAM, 128GB Storage"
                price={24999}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProduct;
