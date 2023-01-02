import React from "react";
import { FcApproval } from "react-icons/fc";
import { Typography } from "@material-ui/core";
import "../styles/SuccessPayment.css";
import { Link } from "react-router-dom";

const SuccessPayment = () => {
  return (
    <div className="SuccessContainer">
      <div className="SuccessIcon">
        <FcApproval />
      </div>
      <Typography>Your Order has been Placed. </Typography>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
};

export default SuccessPayment;
