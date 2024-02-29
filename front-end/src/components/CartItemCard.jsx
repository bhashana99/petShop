import "../styles/cart.css";
import React from "react";

function CartItemCard() {
  return (
    <div className="card-box">
      <div className="cart-img">
        <img
          src="https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg"
          alt="product-image"
        />
      </div>
      <div className="cart-details">
        <div className="item-name">"My First Book of Pencil Control"</div>
        <div className="item-price">Rs.89/=</div>
        <div className="item-button">
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
    </div>
  );
}

export default CartItemCard;
