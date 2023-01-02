import React from "react";
import "../../styles/Footer/ShippingandPicking.css";
import Typography from "@material-ui/core/Typography";

function ShippingAndPickUp() {
  return (
    <div className="ship">
      <div className="shipwords">
        <Typography id="shipHeading">Shipping And Pick Up</Typography>
        <div className="shiphead">
          <span> MUDYE DISNEY Shipping And Pick Up </span>
        </div>
        <div className="shipbody">
          <h6>Shipping method</h6>
          <p>
            ❤Shiplusexpress cash on delivery: from $20
            <br />
            <a href="https://www.shiplushk.com/">https://www.shiplushk.com/</a>
            <br />
            <br />
            ❤ SF Express: From $20 SF Express Station:
            <br />
            <a href="https://htm.sf-express.com/hk/tc/dynamic_function/S.F.Network/SF_business_station_address/">
              https://htm.sf-express.com/hk/tc/dynamic_function/S.F.Network/SF_business_station_address/
            </a>
            <br />
            <br />
            ❤ By the way Smart Locker:
            <br />
            <a href="https://htm.sf-express.com/hk/tc/dynamic_function/S.F.Network/EF-Locker/">
              https://htm.sf-express.com/hk/tc/dynamic_function/S.F.Network/EF-Locker/
            </a>
            <br />
            <br />
            <br />
            ❧ Our store only accepts delivery by mail, and you can pick up
            Shiplus for purchases over $650.
            <br />
            ❧ In-stock products will be shipped within 1-3 working days after
            placing the order.
            <br />
            ❧ It will take 14-21 days to pre-order and ship within 1-3 working
            days.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShippingAndPickUp;
