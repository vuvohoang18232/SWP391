import { NavLink, useNavigate } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx";
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
      {showSignInForm && <SignIn />}
      {showSignUpForm && <SignUp />}
      <div className="header-container">
        <div style={{ marginLeft: "2%" }}>
          <NavLink to="/" end className="nav-logo">
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
          </NavLink>
        </div>
        <div className="nav-container">
          <ul className="nav">
            <li>
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <div
                className="nav-link"
                style={{ display: "flex", alignItems: "center" }}
              >
                Services
                <RxTriangleDown />
              </div>
              <ul className="subnav">
                <li>
                  <NavLink to="/consultations" className="nav-link">
                    Consultations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/workshop" className="nav-link">
                    Workshop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/course-online" className="nav-link">
                    Course Online
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <button className="signin-button" onClick={toggleSignInForm}>
          <p>Log In</p>
        </button>

        <button className="signup-button" onClick={toggleSignUpForm}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Header;
