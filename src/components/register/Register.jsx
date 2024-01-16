import Topbar from "../topbar/Topbar";
import "./register.css";

export default function Login() {
  return (
    <>
      <Topbar />

      <div className="register">
        <div className="loginWrapper">
          <div className="logingLeft">
            <h3 className="loginLogo">Dicksonsocials</h3>
            <span className="loginDesc">
              connect with friends and family on dicksonsocials
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder ="Username" className="loginInput" />
              <input
                placeholder="Email"
                className="loginInput"
              />
              <input placeholder ="Password" className="loginInput" />
              <input
                placeholder="Password Again"
                className="loginInput"
              />
              <button className="loginButton">sign up</button>
              <button className="loginRegisterButton">
                login into account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
