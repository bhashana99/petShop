import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Shop() {

    const [product,setProduct] = useState([]);

    useEffect(()=> {
        loadProduct();
    },[]);

    const loadProduct=async()=>{
        const result=await axios.get("http://localhost:8080/petshop/product");
        setProduct(result.data);
        console.log(result.data);
    }

    return ( 

        <div>
            <h1 className='heading'>All Products</h1>
            
            <div className='product-div'>
        
                {
                    product.map((product,index)=>(
                        <div key={index}>
                            <Link to={`/product-details/`+product.id} >
                                <div className='product-container'  >
                            
                                    <div className='p-image-container'>
                                        <img src={"images/"+product.image} alt="" />
                                    </div>
                                    <div className='detail-container'>
                                        <p>{product.name}</p>
                                        <p>Rs.{product.price}/=</p>
                                        <button className='btn'>Add to cart</button>
                                    </div>
                                    
                                </div>
                            </Link>
                        </div>
                        
                    
                    
                    ))
                }
                

                
            </div>
        </div>
     );
}

export default Shop;

















































// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Shop() {



//     const [product,setProduct] = useState([]);

//     useEffect(()=> {
//         loadProduct();
//     },[]);

//     const loadProduct=async()=>{
//         const result=await axios.get("http://localhost:8010/petshop/product");
//         setProduct(result.data);
//     }
    
//     if(product.category=="food"){
//         return(
//             <div>
//                     <h1 className='heading'>Products</h1>
            
//             <div className='product-div'>
        
//                 {
//                     product.map((product,index)=>(
//                         <div key={index}>
//                             <Link to={`/product-details/`+product.id} >
//                                 <div className='product-container'  >
                            
//                                     <div className='p-image-container'>
//                                         <img src={"images/"+product.image} alt="" />
//                                     </div>
//                                     <div className='detail-container'>
//                                         <p>{product.name}</p>
//                                         <p>Rs.{product.price}/=</p>
//                                         <button className='btn'>Add to cart</button>
//                                     </div>
                                    
//                                 </div>
//                             </Link>
//                         </div> 
//                     ))
//                 } 
//             </div>
//             </div>
//         );
//     }
    
//     console.log(product.category);

//     return ( 
        
//         <div>
            
//         </div>
//      );
// }

// export default Shop;