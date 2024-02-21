import "../styles/cart.css";
function Cart() {
  return (
    <div className="outerbox">
      <div className="container">
        <div className="headings">
          <h1>My Cart</h1>
        </div>
        <div className="sub-headings">
          <div className="product-items">
            <h1>Products</h1>
          </div>
          <div className="subtotal">
            <h1>Subtotal</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
