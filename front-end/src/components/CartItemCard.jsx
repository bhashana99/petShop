import "../styles/cart.css";
import React from "react";

function CartItemCard() {
  return ( 
  <div className="card-bg">
    <div className="cart-img"></div>
    <div className="cart-details">
        <div className="item-name"></div>
        <div className="item-price"></div>
        <div className="item-QtyButton">
          <button>+</button>
          <button>2</button>
          <button>-</button>
        </div>
        <div className="item-remove">
          <button>remove</button>
        </div>

    </div>
  </div>
  );
}

export default CartItemCard;
