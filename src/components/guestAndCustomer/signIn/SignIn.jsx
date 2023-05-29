import "./SignIn.scss";
import Header from "../header/Header";

const SignIn = () => {
  return (
      <div>
              <div className="mainContnt">
                  <div className="box">
                      <div className="boxes bx1"></div>
                      <div className="boxes bx2">
                          <h3>
                              <p>Unlock a World of Discovery.</p>
                              <p>Train your Birds now!</p>
                          </h3>
                          <div className="login-form">
                              <input type="text" placeholder="Phone/Email"/>
                                  <input type="password" placeholder="Password"/>
                                      <input type="submit" value="submit"/>
                          </div>
                          <div className="close-box">
                              <label htmlFor="chkBox" className="box-close">X</label>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
  )
}
 export default SignIn;