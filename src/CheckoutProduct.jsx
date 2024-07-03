import React from 'react';
import "./CheckoutProduct.css"

function CheckoutProduct() {
  return (
    <div>
      <div className="checkoutProduct">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">The Lean Startup</p>
          <p className="checkoutProduct__price">
          <small>$</small>
          <strong>60</strong>
          </p>
          <div className="checkoutProduct__rating">
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <button>Remove from Cart</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct;
