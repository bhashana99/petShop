import { useState,useEffect } from 'react';
import axios from 'axios';

function ViewAll() {

    const [product,setProduct] = useState([]);

    useEffect(()=> {
        loadProduct();
    },[]);

    const loadProduct=async()=>{
        const result=await axios.get("http://localhost:8010/petshop/product");
        setProduct(result.data);
    }


    return ( 


        <div>
            <h1 className='heading'>Products</h1>
            <div>
                
            </div>
            <div className='product-div'>
                {
                    product.map((product,index)=>(
                        <div className='product-container' key={index}>
                    <div className='p-image-container'>
                        <img src={"images/"+product.image} alt="" />
                    </div>
                    <div className='detail-container'>
                        <p>{product.name}</p>
                        <p>Rs.{product.price}/=</p>
                        <button className='btn'>Add to cart</button>
                    </div>

                </div>
                    ))
                }
                

                
            </div>
        </div>
     );
}

export default ViewAll;