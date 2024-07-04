import React from "react";
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product ({id, title, price, rating, image}){

  const [state, dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",  
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image
        },
    });
  };

  return(
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p className="product__rating">
            {Array(rating).fill().map((_, i) => ( <p>⭐</p>
            ))}
          </p>
        </div>
        <img src={image} alt="" />

       <button onClick={addToBasket}>Add to Basket </button>

      </div>


    </div>
  )
}

export default Product;