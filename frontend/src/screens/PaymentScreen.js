import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import "../styles/PaymentScreen.css";
import { createOrder } from "../redux/actions/orderActions";

function PaymentScreen() {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const [imageProve, setImageProve] = useState(null);

  const postImageProve = (pics) => {
    if (!pics) {
      return alert("Please Select a image.");
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      setImageProve(pics);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const order = {
      shippingInfo,
      orderItems: cartItems,
      totalPrice: orderInfo.totalPrice,
      userId: userInfo.user._id,
      paymentInfo: {
        imageprove: undefined,
      },
    };

    const formData = new FormData();
    formData.append("file", imageProve);
    formData.append("upload_preset", "mudyeshop");
    formData.append("cloud_name", "dhixidtbs");
    const { data } = await axios({
      url: "https://api.cloudinary.com/v1_1/dhixidtbs/image/upload",
      data: formData,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    order["paymentInfo"].imageprove = data.url.toString();
    dispatch(createOrder(order));
    navigate("/success");
  };

  return (
    <div className="paymentContainer">
      <h3 className="paymentheader">Payment</h3>
      <div className="paymentBar">
        <form className="shippingForm" onSubmit={(e) => submitHandler(e)}>
          <div>
            <select id="selectedoptions">
              <option selected disabled>
                Select a payment method:
              </option>
              <option>FPS</option>
              <option>PayMe</option>
              <option>Back Transfer ( HSBC )</option>
            </select>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => postImageProve(e.target.files[0])}
            ></input>
          </div>
          <input
            type="submit"
            value={`Pay - $ ${orderInfo && orderInfo.totalPrice}`}
            className="shippingBtn"
          />
        </form>
        <div className="reminder">
          <h3>Payment Method</h3>
          <p className="titleP">FPS:</p>
          <p>* Please pay in FPS via Payee's phone number: *</p>
          <p>* 51166818 *</p>
          <p>* Please complete the payment process within 24 hours *</p>
          <p>* Upload the proof of payment *</p>
          <p className="titleP">Payme:</p>
          <p>* Please complete the payment process within 24 hours *</p>
          <p>* Upload the proof of payment and note the phone number *</p>
          <p className="titleP">Bank Transfer:</p>
          <p>
            Bank: HSBC <br />
            Holder: Chan Tai Man <br />
            Account: 123-561234-123 <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentScreen;
