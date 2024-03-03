import "../styles/cart.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';


function CartItemCard({item}) {
 
  // const {id,iname,price,img} =item;
  const [qty,setQty] = useState(1);

  const handleQty = (d) => {
    if (qty>0){
      setQty(qty+d);
    }
  }

  const handleUpdateQty = async (cartId,qty) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5173/api/v1/cart/addToCart/cartId?=${cartId}&cartQty?=${qty}`
        );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  return (

    <div className="card-box">
      <div className="cart-img">
        <img
          src={item.img}
          alt="product-image"
        />
      </div>
      <div className="cart-details">
        <div className="item-name">{item.pname}</div>
        <div className="item-price">{item.price}</div>
        <div className="item-button">
          <div className="item-QtyButton">
            <button onClick={()=>handleQty(1)}>+</button>
            <button>{item.qty}</button>
            <button onClick={()=>handleQty(-1)}>-</button>
            <button onClick={()=>handleUpdateQty(item.qty,item.id)}>Update</button>
          </div>
          <div className="item-remove">
            
            <button onClick={()=>{handleRemove(item.id)}}>remove</button>
          </div>
        </div>
      </div>
    </div>


  );
}

export default CartItemCard;
