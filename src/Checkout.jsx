import "./Checkout.css"
import React from "react";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  return (
    <div>
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
        <CheckoutProduct/>
      </div>

      <div className="checkout__right"></div>
    </div>
  );
}

export default Checkout;
