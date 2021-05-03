import React from "react";
import getImg from "./../../Utils/getImg";
import "./Login.css";
import { useHistory } from "react-router-dom";
import debounce from "./../../Utils/debounce";

const Login = (props) => {
  const history = useHistory();
  React.useEffect(() => {
    if (props.isLoggedIn) {
      history.push("/users");
    } else {
      acceptTerms();
    }
  }, [props]);

  function acceptTerms() {
    if (
      document.getElementById("username").value.length > 0 &&
      document.getElementById("password").value.length > 0
    ) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  }

  const [terms, setTerms] = React.useState(false);

  function showPass() {
    let pass = document.getElementById("password");
    if (pass.type === "text") {
      pass.type = "password";
    } else {
      pass.type = "text";
    }
  }

  function login() {
    props.setUserType(
      document.getElementById("username").value,
      document.getElementById("username").value == "jithin" ? "admin" : "user"
    );
    sessionStorage.setItem(
      "loggedIn",
      document.getElementById("username").value
    );
    history.push("/users");
  }

  return !props.isLoggedIn ? (
    <div className="sa-login-w">
      <div className="login-container">
        <div className="form-container">
          <div className="welcome-text">
            <span>Welcome to A Strum Away</span>
          </div>
          <div className="input-container-box">
            <input
              type="email"
              id="username"
              className="form-control login-input"
              placeholder="Email"
              onChange={() => acceptTerms()}
            />

            <div style={{ position: "relative" }}>
              <input
                type="password"
                id="password"
                className="login-input"
                placeholder="Password"
                onChange={() => acceptTerms()}
              />
              <span
                style={{ position: "absolute", left: "85%", top: "15%" }}
                className="clickable"
                onClick={() => showPass()}
              >
                <img src={getImg("show-eye.svg")} alt="show password" />
              </span>
            </div>

            <input
              type="submit"
              className={`.form-control sa-login-btn  ${
                !terms ? "disabled" : ""
              }`}
              value="Sign In"
              onClick={() => login()}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
