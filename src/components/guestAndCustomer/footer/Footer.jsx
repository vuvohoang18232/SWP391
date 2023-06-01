import React from "react";
import { logo1 } from "../../../utils/constants";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-column">
        <div className="logo-container">
          <div className="logo-image">
            <img src={logo1} alt="page logo" />
          </div>
          <div className="logo-text">
            <p>BIRD</p>
            <p>TRADING</p>
            <p>CENTER</p>
          </div>
        </div>
        <div>
          <div>
            <p>Throughout our lives, people have to taught that</p>
            <p>because we keep do, we are focused on travel</p>
          </div>
        </div>
      </div>
      <div className="column">
        <h1>Company</h1>
        <div>
          <p>Blog</p>
          <p>How it works</p>
          <p>Terms</p>
          <p>Private Policy</p>
        </div>
      </div>
      <div className="column">
        <h1>About Us</h1>
        <div>
          <p>Who we are</p>
          <p>Feature</p>
          <p>News letter</p>
          <p>Career</p>
        </div>
      </div>
      <div className="column">
        <div className="contact-footer">
          <h1>Contact</h1>
        </div>
        <div className="contact-info-footer">
          <p>
            <LocationOnIcon />
            FPT University
          </p>
          <p>
            <PhoneIcon />
            0123 456 789
          </p>
          <p>
            <MailIcon />
            xxx@xxx.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
