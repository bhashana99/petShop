function SingleProductDetails() {
    return (
      <div className="items-center">
          <div className="single-product-container">
            <div className="productImage">
              <img src="images/cat food 1.jpg" alt="" />
            </div>
            <div className="productDetails">
              <p className="text-2xl p-1">Cat food</p>
              <p className="text-lg p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos ipsam ipsum cumque eligendi, 
                nostrum ipsa corrupti illo doloremque doloribus minima modi ea maiores facere sit itaque, 
                aliquid nisi eaque.</p>
              <p className="text-xl p-4">Rs.2000/=</p>
              
              <button className="btn">Add to cart</button>
            </div>
        </div>
      </div>
        
      );
}

export default SingleProductDetails;