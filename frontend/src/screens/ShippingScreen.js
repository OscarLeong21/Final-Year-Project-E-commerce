import "../styles/ShippingScreen.css";
import { useAlert } from "react-alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GoAlert } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../redux/actions/cartActions";
import { FaHome, FaCity, FaPhoneAlt, FaPlane } from "react-icons/fa";

const ShippingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [delivery, setDelivery] = useState();
  const [showDivSF, setShowDivSF] = useState(false);
  const [showDivSP, setShowDivSP] = useState(false);

  const showdivsf = () => {
    if (delivery === "ShipPlus") {
      setShowDivSF(true);
    } else {
      setShowDivSF(false);
    }
  };

  const showdivsp = () => {
    if (delivery === "SF_express") {
      setShowDivSP(true);
    } else {
      setShowDivSP(false);
    }
  };

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNum.length < 8 || phoneNum.length > 8) {
      alert.error("PhoneNo. should be 8 digits Long");
      return;
    }
    dispatch(saveShippingInfo({ address, city, country, phoneNum }));
    navigate("/order/firm");
  };

  return (
    <div className="shippingContainer">
      <h2 className="header">Shipping Details</h2>
      <div className="shippingBar">
        <div>
          <form className="shippingForm" onSubmit={shippingSubmit}>
            <div>
              <select
                id="delivery"
                value={delivery}
                onChange={(e) => {
                  setDelivery(e.target.value);
                  showdivsf();
                  showdivsp();
                }}
              >
                <option disabled selected value>
                  -- select delivery company --
                </option>
                <option value="SF_express">SF_express</option>
                <option value="ShipPlus">ShipPlus</option>
              </select>
            </div>
            <div>
              <FaHome />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <FaCity />
              <input
                type="text"
                placeholder="Delivery Code"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <FaPlane />
              <input
                type="text"
                required
                placeholder="Extra Info"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <FaPhoneAlt />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>

            <input type="submit" value="Continue" className="shippingBtn" />
          </form>
        </div>

        {showDivSF ? (
          <div className="SF">
            <h3>For SF Express users</h3>
            <p>
              If you choose SF Express Station Or SmartLocker, please provide
              the SF address and code for delivery.
            </p>
            <p>【E.g. H852FE01P </p>
            <p>
              1/F, Mei Lam Shopping Mall, 30 Mei Tin Road, Tai Wai, Sha Tin, Sha
              Tin District, New Territories, Hong Kong(SF Locker)】
            </p>
            <p>SF address and code, please check this link:</p>
            <a
              href="https://htm.sf-express.com/hk/en/dynamic_function/S.F.Network/EF-Locker/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://htm.sf-express.com/hk/en/dynamic_function/S.F.Network/EF-Locker/
            </a>
            <p>Shipping will be paid by the customer in the form of collect</p>
            <p>
              The shipping cost of the goods depends on the weight and volume of
              the goods
            </p>
            <p>
              <GoAlert /> All shipping methods involve risks, all the shipping
              risks of the goods are borne by the customer, and the shop is not
              responsible for any damage or damage <GoAlert />
            </p>
          </div>
        ) : (
          <null />
        )}

        {showDivSP ? (
          <div className="SF">
            <h3>For ShipPlus users</h3>
            <p>
              If you choose ShipPlus, the pick-up point number must be provided:
            </p>
            <p>[E.g. Sham Shui Po KLSSP08 ]</p>

            <p>ShipPlus address and code, please check this link: </p>
            <a href=" https://www.shiplushk.com/selfpickup" target="_blank">
              https://www.shiplushk.com/selfpickup
            </a>

            <p>Shipping will be paid by the customer in the form of collect</p>
            <p>
              The shipping cost of the goods depends on the weight and volume of
              the goods
            </p>
            <p>
              <GoAlert /> All shipping methods involve risks, all the shipping
              risks of the goods are borne by the customer, and the shop is not
              responsible for any damage or damage <GoAlert />
            </p>
          </div>
        ) : (
          <null />
        )}
      </div>
    </div>
  );
};

export default ShippingScreen;
