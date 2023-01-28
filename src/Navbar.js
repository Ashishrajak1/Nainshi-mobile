import React from "react";
import "./Navbar.css";
import logo from "./Photos/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { auth } from "./CartStore/firebase";

function Navbar() {
  const basket = useSelector((state) => state.basket.length);
  const user = useSelector((state) => state.user);
  const useremail = useSelector((state) => state.user?.email);

  const AuthenticationHandler = () => {
    if (user) {
      auth.signOut();
    }
  };
  const emailname = () => {
    let newemail = "";
    for (let i = 0; i < useremail.length; i++) {
      if (useremail[i] !== "@") {
        newemail = newemail + useremail[i];
      } else {
        break;
      }
    }
    return newemail;
  };

  

  return (
    <>
      <div className="Navbar">
        <Link to="/">
          <span className="Brand_logo">
            <img src={logo}/>
          </span>
        </Link>

        <div className="Navbar_items">
          <div className="Navbar_search">
            <input className="Navbar_searchInput" type="text" />
            <span className="Navbar_searchIcon">
              <FaSearch />
            </span>
          </div>
          <NavLink to="/">
            <span className="Navbar_home">Home</span>
          </NavLink>
          <NavLink to={!user && "/sign"}>
            <div className="Navbar_auth" onClick={AuthenticationHandler}>
              <span className="Navbar_optionLine">
                {user ? emailname() : "Hello Guest"}
              </span>
              <span className="Navbar_signin">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </NavLink>
          <NavLink to="/checkout">
            <div className="Navbar_basket">
              <span className="Navbar_shoppingBag">
                <FaShoppingBag />
              </span>

              <span className="basket_count">{basket}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
