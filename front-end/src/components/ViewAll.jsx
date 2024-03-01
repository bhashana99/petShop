import { useState,useEffect } from 'react';
import axios from 'axios';
import Image_1 from '../components/images/cat food 1.jpg';

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
                <div className='product-container'>
                    <div className='p-image-container'>
                        <img src={Image_1} alt="" />
                    </div>
                    <div className='detail-container'>
                        <p>Name</p>
                        <p>Price</p>
                        <button className='btn'>Add to cart</button>
                    </div>

                </div>
                

                
            </div>
        </div>
     );
}

export default ViewAll;