import React from "react";
import "./Product.css"
function Product (){
  return(
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$300</p>
          <p className="product__rating">*****</p>
        </div>
        <img src="https://people.com/thmb/I30mqUIY6bvjgQejCcrOvQG8LSY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/movers-shakers-kitchen-roundup-tout-2000-68041dc948184815b78cab75a4fbd088.jpg" alt="" />
      </div>

    </div>
  )
}

export default Product;