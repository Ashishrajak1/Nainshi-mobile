import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        <span className="Brand_name" href="#">
          Nainshi Mobile
        </span>

        <div className="Navbar_search">
          <input className="Navbar_searchInput" type="text" />
          <span className="Navbar_searchIcon">
            <FaSearch />
          </span>
        </div>
        <NavLink to="/home">
          <span className="Navbar_signin">Home</span>
        </NavLink>
        <NavLink to="/sign">
          <div className="Navbar_signin">
            <span>Sign In</span>
          </div>
        </NavLink>
        <NavLink to="#">
        <div className="Navbar_basket">
         
            <span className="Navbar_shoppingBag">
              <FaShoppingBag />
            </span>
          
          <span className="basket_count">0</span>
        </div>
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
