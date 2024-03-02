import React from 'react'
import './ContactUs.css'
import map from './Assests/map.png'
import { IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className='contactUs'>

        <h1 className='title'>Contact Us</h1>

        <div className='contactUsDescription'>

          <h2>Explore All kinds of brands in the world</h2>
          <img src={map} alt="" />

        </div>
        
      
    </div>
  )
}

export default ContactUs
