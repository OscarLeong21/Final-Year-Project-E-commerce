import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/ProfileScreen.css";
import mudye from "../components/pics/mudye.jpeg";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { isAuthenticated, userInfo } = userLogin;

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="profileContainer">
      <div>
        <h1>My Profile</h1>
        <div
          className="profileicon"
          style={{ backgroundImage: `url(${mudye})` }}
        ></div>
      </div>
      <div>
        <div>
          <h4>Full Name</h4>
          <span>{userInfo?.user?.name}</span>
        </div>
        <div>
          <h4>Email</h4>
          <span>{userInfo?.user?.email}</span>
        </div>
        <div>
          <h4>Joined On</h4>
          <span>{String(userInfo?.user?.createdAt).substr(0, 10)}</span>
        </div>

        <div className="myorder">
          <Link to="/orders">My Orders</Link>
        </div>

        <div>
          {userInfo.user.role === "admin" ? (
            <Link to="/admin/adminpage">Admin Page</Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
