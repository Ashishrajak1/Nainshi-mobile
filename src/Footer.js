import React from "react";
import "./Footer.css";
import { GoLocation } from "react-icons/go";
import { TbPhone, TbMail, TbLocation } from "react-icons/tb";
import F_logo from "./Photos/f_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="Footer_main">
        <span className="Brand_F_logo">
          <img src={F_logo} />
        </span>

        <div className="Footer_main_sec">
          <div className="footer_about">
            <span className="footer_span">More About Company</span>

            <p className="f_about_p">
              welcome to nainshi mobile, your one-stop shop for all your online
              shopping needs. we are an ecommerce company that specializes in
              selling a wide range of products at affordable prices.
              <br />
              our goal is to make shopping easy and convenient for our
              customers. we have a user-friendly website that makes browsing and
              purchasing products a breeze. we also offer fast and reliable
              shipping, as well as easy and secure payment options.
            </p>
          </div>
          <div className="footer_contact">
            <span className="footer_span">Contact Information</span>
            <div className="footer_c">
              <div className="right_detail">
                <div className="icon_bg_c">
                  <GoLocation />
                </div>
                Address:
                <span>Mangawan rewa (M.P.)</span>
              </div>
              <div className="right_detail">
                <div className="icon_bg_c">
                  <TbPhone />
                </div>
                Phone:
                <span>+91-7987057932</span>
              </div>
              <div className="right_detail">
                <div className="icon_bg_c">
                  <TbMail />
                </div>
                Email:<span>ashishrajak5005@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="footer__links">
            <span className="footer_span">Links</span>

            <ul>
              <p>
                <Link className="ankar-tag" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="ankar-tag" to="/checkout">
                  Basket
                </Link>
              </p>
              <p>
                <Link className="ankar-tag" to="/sign">
                  Sign In
                </Link>
              </p>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © Copyright 2023, All Rights Reserved by Nainshi Mobile.
        </div>
      </div>
    </>
  );
}

export default Footer;
