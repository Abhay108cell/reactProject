import React from "react";
import "./Product.css"
function Product (){
  return(
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">
            <small>$</small>
            <strong>99</strong>
          </p>
          <p className="product__rating">*****</p>
        </div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" />

       <button>Add to Basket</button>

      </div>


    </div>
  )
}

export default Product;