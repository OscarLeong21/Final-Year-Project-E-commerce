import React from "react";
import "../../styles/Footer/Terms.css";
import Typography from "@material-ui/core/Typography";

function Terms() {
  return (
    <div className="terms">
      <div className="termswords">
        <Typography id="TermsHeading">TERMS OF CONDITIONS</Typography>
        <div className="termshead">
          <span> MUDYE DISNEY TERMS OF CONDITIONS </span>
        </div>
        <div className="termsbody">
          <h6>Instructions for placing an order</h6>
          <p>
            Once the order is submitted, it cannot be modified, please be sure
            to verify all the contents before ordering. <br />
            In order to ensure the rights and interests of customers, if the
            shipment has not been received within seven days after the order is
            shipped, please contact us or the transportation company to check
            the shipment status as soon as possible. <br />
          </p>
          <h6>Refund procedure</h6>
          <p>
            Refund processing: If the item is out of stock, it will be returned
            to the customer in full within one week. <br />
          </p>
          <h6>Pre-order items</h6>
          <p>
            Pre-ordered products are generally received within 14-21 working
            days. <br />
            If the pre-order item is out of stock, the full amount will be
            refunded. <br />
            All pictures on this website are copyrighted by MUDYEDISNEY, please
            do not reprint and use without approval. The company reserves the
            right to revise the above terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
