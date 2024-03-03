import "../styles/cart.css";
import CartItemCard from "../components/CartItemCard";
import { useState } from "react";

function Cart({ customerId }) {
  const [productDetails, setProductDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5173/api/v1/cart/${id}`
  //       );
  //       setCartItems(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchCartItems();
  // }, []);

  // const handleTotalPrice=(qty)=>{
  //   setTotalPrice((qty)=>{
  //     totalPrice = qty * price
  //   })
  // }

  return (
    <div className="outerbox">
      <div className="row-1">
        <div className="heading">
          <h1>My Cart</h1>
        </div>
      </div>

      <div className="row-2">
        <div className="product-items">
          <div className="sub-headings">
            <h1>Products</h1>
          </div>
          <div className="item-card">
            {productDetails.map((item, index) => {
              <CartItemCard key={index} item={item} />;
            })}
          </div>
        </div>

        <div className="cart-total">
          <div className="sub-headings">
            <h1>Cart Total</h1>
          </div>
          {productDetails.map((item, index) => {
            <p key={index}></p>;
          })}
          <p style={{
              fontSize: "2rem",
              padding: "15px",
              fontWeight: "bold",
              marginright: "5px"
            }}>subtotal : Rs.{totalPrice}</p>
          <button
            onClick={() => handleUpdateQty(qty, iid)}
            style={{
              fontSize: "1rem",
              padding: "15px",
              fontWeight: "bold",
              marginright: "5px",
              background: "#28a5d6",
              color:'white',
              border: "1px solid lightGreen",
              borderRadius: ".5rem",
            }}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>

    // ------------------
    // <div className="cart">
    //   <div className="heading">My Cart</div>
    //   <div className="sub-heading">
    //     <div className="products">Product</div>
    //     <div className="subTotal">Sub total</div>
    //   </div>
    // </div>
  );
}

export default Cart;
