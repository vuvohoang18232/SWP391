import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { logo1 } from "../../../utils/constants";
import "./Header.scss";
import { useState } from "react";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

const Header = () => {
  // const navigate = useNavigate();
  const [showSignInForm, setShowSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
        {showSignInForm && (
              <SignIn/>
        )}
        {showSignUpForm && (
              <SignUp/>
        )}
      <div className="header-container">
            <div className="logo-container">
              <div className="logo-image"><img src={ logo1 } alt="page logo"/></div>
              <div className="logo-text">
                <p>BIRD</p>
                <p>TRADING</p>
                <p>CENTER</p>
              </div>
            </div>
            {/*<button className="nav-link"><a><NavLink to="/home">*/}
            {/*  Home*/}
            {/*</NavLink></a></button>*/}
            {/*<button className="nav-link"><a><NavLink to="/about us">*/}
            {/*  About Us*/}
            {/*</NavLink></a></button>*/}
            {/*<button className="nav-link"><a><NavLink to="/service">*/}
            {/*  Service*/}
            {/*</NavLink></a></button>*/}
            {/*<button className="nav-link"><a><NavLink to="/blog">*/}
            {/*  Blog*/}
            {/*</NavLink></a></button>*/}
            {/*<button className="nav-link"><a><NavLink to="/contact">*/}
            {/*  Contact*/}
            {/*</NavLink></a></button>*/}
            <div className="nav-container">
              <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li>
                  <a href="#">Services
                    <i className="nav-arrdown ti-angle-down"></i>
                  </a>
                  <ul className="subnav">
                    <li><a href="#consultation">Consultations</a></li>
                    <li><a href="#work-shop">Workshop</a></li>
                    <li><a href="#course-online">Course Online</a></li>
                  </ul>
                </li>
                <button className="signin-button" onClick={toggleSignInForm}><p>Sign In</p></button>
                <button className="signup-button" onClick={toggleSignUpForm}>Sign Up</button>
              </ul>
            </div>

      </div>
    </div>
  );
};
export default Header;
