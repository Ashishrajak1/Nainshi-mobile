import React from "react";
import "./CategoryCard.css";
function CategoryCard({image, title}) {
  return (
    <>
      <div className="category_product_card">
        <div className="category_circle">
          <img className="category_img" src={image} alt="" />
        </div>
        <div className="category_product_title">{title}</div>
      </div>
    </>
  );
}

export default CategoryCard;  
