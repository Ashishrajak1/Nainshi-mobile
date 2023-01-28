import "./CategorySlider.css";
import React, { Component } from "react";
import Slider from "react-slick";
import cag1 from "../Photos/cag1.png";
import cag2 from "../Photos/cag2.png";
import cag3 from "../Photos/cag3.png";
import cag4 from "../Photos/cag4.png";
import cag5 from "../Photos/cag5.png";
import cag6 from "../Photos/cag6.png";
import cag7 from "../Photos/cag7.png";

import CategoryCard from "./CategoryCard";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div
        className="categorycart_slide"
        style={{
          marginTop: "100px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Slider {...settings}>
          <div>
            <h3>
              <CategoryCard title="Mac Book" image={cag1} />
            </h3>
          </div>
          <div>
            <h3>
              <CategoryCard title="iPhone" image={cag2} />
            </h3>
          </div>
          <div>
            <h3>
              <CategoryCard title="Pad" image={cag3} />
            </h3>
          </div>
          <div>
            <h3>
              <CategoryCard title="Earbuds" image={cag4} />
            </h3>
          </div>
          <div>
            <h3>
              <CategoryCard title="Smart Watch" image={cag5} />
            </h3>
          </div>
          <div>
            <h3>
              <CategoryCard title="Power bank" image={cag6} />
            </h3>
          </div>
          <div>
            <h3>
              <CategoryCard title="Charger & Cable" image={cag7} />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
