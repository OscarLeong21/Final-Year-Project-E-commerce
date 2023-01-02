import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading.js";
import { useAlert } from "react-alert";
import "../styles/LoginScreen.css";
import mickey from "../components/pics/mickey.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
    if (userInfo) {
      alert.success("Login Successfully.");
    }
    if (error) {
      alert.error("Wrong email or password.");
    }
  }, [navigate, alert, error, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <div className="loginScreen">
      {loading && <Loading />}
      <section>
        <div className="logincontainer">
          <div className="login">
            <div className="imgBox">
              <img src={mickey} alt="" />
            </div>
            <div className="formBox">
              <form onSubmit={submitHandler}>
                <h2>Sign In</h2>

                <input
                  className="emailinput"
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="passwordinput"
                  required
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input type="submit" value="Login" className="logsubmitBtn" />
                <p className="signup">
                  Don't have an account ?<Link to="/register">Register </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
