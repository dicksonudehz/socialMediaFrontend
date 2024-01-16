import Topbar from "../topbar/Topbar";
import "./login.css";

export default function Login() {
  return (
    <>
      <Topbar />

      <div className="login">
        <div className="loginWrapper">
          <div className="logingLeft">
            <h3 className="loginLogo">Dicksonsocials</h3>
            <span className="loginDesc">
              connect with friends and family on dicksonsocials
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder ="Email" className="loginInput" />
              <input
                placeholder="Password"
                className="loginInput"
              />
              <button className="loginButton">login</button>
              <span className="loginForgot">forgot password</span>
              <button className="loginRegisterButton">
                create a new account{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
