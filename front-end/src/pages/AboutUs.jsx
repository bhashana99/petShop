import React from 'react'
import './AboutUs.css'
import aboutUsDog from './Assests/aboutUsDog.jpg';
import image1 from './Assests/image1.jpeg';
import image2 from './Assests/image2.jpeg';
import image3 from './Assests/image3.jpeg';
import image4 from './Assests/image4.jpeg';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <h1 className='title'>About Us</h1>

      <div className="aboutUsBody">

         <img src={aboutUsDog} alt="" />
        <p className='description'>We are leading in the pet care business, providing pet owners with everything they need to 
        look after their pet – from food, toys and bedding, medication and grooming services.But we're more than just a pet supply store – we're a community of pet lovers dedicated to helping pets in need. We partner with local animal shelters and 
        rescue organizations to support adoption efforts and promote responsible pet ownership. </p>
 

      </div>

      <div className="brandings">

            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />

        </div>

    </div>
  )
}

export default AboutUs
