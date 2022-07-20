import React from "react";
import "./Category.css";
import MultipleItems from "./CategorySlider";
function Category() {
  return (
    <>
      <div className="category_titel">
        <h1>Category</h1>
      </div>
      <div className="category">
        <div className="category_product_contenar">
          <MultipleItems />
        </div>
      </div>
    </>
  );
}

export default Category;
