import React from "react";
import "./Home.css";
import Product from "./Product";
import img1 from "./Photos/img1.png";
import img2 from "./Photos/img2.png";
import img3 from "./Photos/img3.png";
import img4 from "./Photos/img4.png";
import banner from "./Photos/banner.png";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_slide_img">
          <img src={banner} alt="" width={1200} />
        </div>
        <div className="home_conteiner">
          <div className="home_row">
            <Product
              id="1"
              title="JBL Wireless Speaker "
              price={2999}
              image={img1}
              rating={4}
            />
            <Product
              id="2"
              title="AirPods Apple earbuds "
              price={5999}
              image={img2}
              rating={5}
            />
            <Product
              id="3"
              title="Apple Watch Smartwatch Wearable technology"
              price={29999}
              image={img3}
              rating={5}
            />
            <Product
              id="4"
              title="Beats Solo 2 Headphones Beats Electronics"
              price={5999}
              image={img4}
              rating={4}
            />

            <div className="home_row">
              <div className="home_row"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
