import "../styles/cart.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';


function CartItemCard(item) {
 
  const {iid,iname,price,img} =item;
  const [qty,setQty] = useState(1);

  const handleQty = (d) => {
    if (qty>0){
      setQty(qty+d);
    }
  }

  const handleUpdateQty = async (updateQty,iItemId) => {
    try {
      const response = await axios.post(
        // `http://localhost:8080/api/v1/cart/updateShoppingCart?shoppingCartId=${shoppingCartId}&quantity=${quantity}`
        );
      //return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  return (

    <div className="card-box">
      <div className="cart-img">
        <img
          src={img}
          alt="product-image"
        />
      </div>
      <div className="cart-details">
        <div className="item-name">{iname}</div>
        <div className="item-price">{price}</div>
        <div className="item-button">
          <div className="item-QtyButton">
            <button onClick={()=>handleQty(1)}>+</button>
            <button>{qty}</button>
            <button onClick={()=>handleQty(-1)}>-</button>
            <button onClick={()=>handleUpdateQty(qty,iid)}>Update</button>
          </div>
          <div className="item-remove">
            
            <button onClick={()=>{handleRemove(iid)}}>remove</button>
          </div>
        </div>
      </div>
    </div>


  );
}

export default CartItemCard;
