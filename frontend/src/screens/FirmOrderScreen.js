import React from "react";
import "../styles/FirmOrderScreen.css";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

const FirmOrderScreen = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const totalPrice = subtotal;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <div className="FirmOrderPage">
      <div>
        <div className="shippinginfo">
          <Typography>Shipping Info</Typography>
          <div className="shipinfobox">
            <div>
              <p>Name:</p>
              <span>{userInfo.user.name}</span>
            </div>
            <div>
              <p>Phone:</p>
              <span>{shippingInfo.phoneNum}</span>
            </div>
            <div>
              <p>Address:</p>
              <span>{address}</span>
            </div>
          </div>
        </div>
        <div className="cartitemsbox">
          <Typography>Your Cart Items:</Typography>
          <div className="cartitemsContainer">
            {cartItems &&
              cartItems.map((item) => (
                <div key={item.product}>
                  <img src={item.imageUrl} alt="Product" />
                  <Link to={`/product/${item.product}`}>{item.name}</Link>{" "}
                  <span>
                    {item.qty} X ${item.price} = <b>${item.price * item.qty}</b>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="SummaryBox">
          <Typography>Order Summery</Typography>
          <div>
            <div>
              <p>Subtotal:</p>
              <span>${subtotal}</span>
            </div>
            <div>
              <p>Shipping Fee:</p>
              <span> Depends on the different delivery company. </span>
            </div>
          </div>

          <div className="SummaryTotal">
            <p>
              <b>Total:</b>
            </p>
            <span>${totalPrice}</span>
          </div>

          <button onClick={proceedToPayment}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default FirmOrderScreen;