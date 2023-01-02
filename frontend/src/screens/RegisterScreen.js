import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading.js";
import { useAlert } from "react-alert";
import "../styles/RegisterScreen.css";
import minnie from "../components/pics/minnie.png";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const alert = useAlert();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo, error]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (error) {
      alert.error(
        "This user already exists, Please use another email or name!"
      );
    }

    if (password === confirmpassword) {
      alert.success("Register unsuccessfully.");
      dispatch(register(name, email, password));
    } else alert.error("Confirm password does not match.");
  };

  return (
    <div className="registerscreen">
      {loading && <Loading />}
      <section>
        <div className="registercontainer">
          <div className="formimg">
            <div className="formgroup">
              <form onSubmit={submitHandler}>
                <h2>Create an account</h2>
                <input
                  className="nameinput"
                  required
                  type="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="mailinput"
                  required
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="passinput"
                  required
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="confirminput"
                  required
                  type="password"
                  value={confirmpassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <input
                  type="submit"
                  value="Register"
                  className="logsubmitBtn"
                />
                <p className="signup">
                  Already have a account ?<Link to="/login">Login </Link>
                </p>
              </form>
            </div>
            <div className="imggroup">
              <img src={minnie} alt="minnie" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterScreen;
