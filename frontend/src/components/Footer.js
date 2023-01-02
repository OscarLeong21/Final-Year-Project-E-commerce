import React from "react";
import "../styles/Footer.css";
import { SiInstagram, SiPiwigo } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="leftFoot">
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/shippingandpickup">
          Shipping / Pick Up
          </Link>
        </li>
        <li>
          <Link to="/terms">
          Terms and conditions
          </Link>
        </li>
      </ul>

      <div className="middle">
        <h1>
          <a href="/" style={{ textDecoration: "none" }}>
            MUDYE DISNEY
          </a>
        </h1>

        <p>Copyrights 2022 &copy; MudYeDisney</p>
      </div>

      <div className="rightFoot">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/mudye_disney/">
          <SiInstagram /> Instagram
        </a>
        <a href="https://www.carousell.com.hk/u/mud_ye_disney/">
          <SiPiwigo /> Carousell
        </a>
      </div>
    </footer>
  );
};

export default Footer;
