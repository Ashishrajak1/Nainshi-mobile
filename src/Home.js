import React from "react";
import "./Home.css";
import Product from "./Product";
import img1 from "./Photos/img1.png";
import img2 from "./Photos/img2.png";
import img3 from "./Photos/img3.png";
import img4 from "./Photos/img4.png";
import img5 from "./Photos/img5.png";
import img6 from "./Photos/img6.png";
import img7 from "./Photos/img7.png";
import img8 from "./Photos/img8.png";
import banner from "./Photos/banner.png";
import Category from "./HomeComponent/Category";

function Home() {
  return (
    <>
      <div className=" home">
        <div className="home_slide_img">
          <img className="banner" src={banner} alt="" width={1200} />
        </div>
        <div>
          <Category />
        </div>
        <div className="container">
          <div className="row home_row">
            <div className="col-3 ">
              <Product
                id="1"
                title="JBL Wireless Speaker "
                price={2999}
                image={img1}
                rating={4}
              />
            </div>
            <div className="col-3">
              <Product
                id="2"
                title="AirPods Apple earbuds "
                price={5999}
                image={img2}
                rating={5}
              />
            </div>
            <div className="col-3">
              <Product
                id="3"
                title="Apple Watch Smartwatch Wearable technology"
                price={29999}
                image={img3}
                rating={5}
              />
            </div>
            <div className="col-3">
              <Product
                id="4"
                title="Beats Solo 2 Headphones Beats Electronics"
                price={5999}
                image={img4}
                rating={4}
              />
            </div>
          </div>
          <div className="row row-cols-4 justify-content-center align-items-center">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Product
                id="1"
                title="Vivo Y81 (Black, 32GB, 3GB Ram) "
                price={12000}
                image={img5}
                rating={4}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Product
                id="2"
                title="Apple iPhone X (Silver 64 GB Rom) "
                price={83500}
                image={img6}
                rating={5}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Product
                id="3"
                title="SAMSUNG Galaxy S9 (Lilac Purple, 64 GB) (4 
                  GB Ram)"
                price={62500}
                image={img7}
                rating={5}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Product
                id="4"
                title="Powar Bank 10000mh"
                price={2000}
                image={img8}
                rating={4}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
