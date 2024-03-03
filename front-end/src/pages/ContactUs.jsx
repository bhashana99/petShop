import React from 'react'
import './ContactUs.css'
import map from './Assests/map.png'
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className='contactUs'>

        <h1 className='title'>Contact Us</h1>

        <div className='contactUsDescription'>

          <h2>Explore All kinds of brands in the world</h2>

        </div>
        
       <div className='map'>
       < img src={map} alt="" />

       <div className="mapDescription">

            <ul>
                <li><BsFillTelephoneFill />Telephone : 07703425612</li>
                <li><TfiEmail />Email : petshop@gmail.com</li>
                <li><FaFacebook />Facebook : petshop</li>
            </ul>

       </div>
       </div>
    </div>
  )
}

export default ContactUs
