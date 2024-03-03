import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadProduct();
  });

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8010/petshop/getProductById?id=`+id);
    setProduct(result.data);
    console.log(product.image);
  };

  return (
    <div>
      
              <div className="items-center" >
                <div className="single-product-container">
                  <div className="productImage">
                  <img src={`../images/` + product.image} alt="" />
                  </div>
                  <div className="productDetails">
                    <p className="text-2xl p-1">{product.name}</p>
                    <p className="text-lg p-3">{product.description}</p>
                    <p className="text-xl p-4">Rs.{product.price}/=</p>
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </div>          
  
    </div>
  );
}

export default SingleProductDetails;
