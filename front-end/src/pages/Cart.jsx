import "../styles/cart.css";
import CartItemCard from "../components/CartItemCard";

function Cart() {
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
            <CartItemCard/>
            <CartItemCard/>
            <CartItemCard/>
          </div>

        </div>

        <div className="cart-total">

          <div className="sub-headings">
            <h1>Cart Total</h1>
          </div>

          <p>subtotal : Rs.10000</p>

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
