import "./SignIn.scss";
import Header from "../header/Header";
import {NavLink} from "react-router-dom";
import { google, sign} from "../../../utils/constants";

const SignIn = ({toggleSignInForm}) => {
  return (
      <signin>
          <input type="checkbox" name="" id="chkBox"/>
              <div className="mainContnt">
                  <div className="box">
                      <div className="boxes bx1">
                        <img src={sign} alt="sign-in image" />
                      </div>
                      <div className="boxes bx2">
                          <h3>
                              <p>Unlock a World of Discovery.</p>
                              <p>Train your Birds Now!</p>
                          </h3>
                          <div className="login-form">
                              <input type="text" placeholder="Phone number or Email"/>
                              <input type="password" placeholder="Password"/>
                              <input type="submit" value="Login"/>
                          </div>
                          <div>
                              <a href="#" className="forgot-password">
                                  Forgot password?
                              </a>
                          </div>
                          {/* <div>
                              <button className="login-google">
                                  Login using Google
                              </button>
                          </div> */}
                          <div>
                            <button className="new-account">
                                Create new account
                            </button>
                          </div>
                          <div className="close-box">
                              <label htmlFor="chkBox" className="box-close" onClick={ () => toggleSignInForm()}>X</label>
                          </div>
                      </div>
                  </div>
              </div>
      </signin>
  )
}
 export default SignIn;