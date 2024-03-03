import React from "react";
import {
  FaPhone,
  FaXTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row bg-stone-900 text-white p-8 font-sans">
        <div className="basis-1/3 mb-5">
          <h4 className="text-xl mb-3">About company overview</h4>
          <p>
          We are leading in the pet care business, providing pet owners with everything they need to
           look after their pet – from food, toys and bedding, medication and grooming services.
          But we're more than just a pet supply store – we're a community of pet lovers dedicated to helping pets in need.
          </p>
        </div>

        <div className="flex justify-center md:border-white md:border-l-2 basis-1/3 mb-5">
          <div>
            <h4 className="text-xl mb-3">Customer</h4>

            <div>
              <ul>
                <li className="hover:text-green-600 mb-1">
                  <Link to="/">Help and support</Link>
                </li>
                <li className="hover:text-green-600 mb-1">
                  <Link to="/">Shipping and delivery</Link>
                </li>
                <li className="hover:text-green-600 mb-1">
                  <Link to="/">Payment method</Link>
                </li>
                <li className="hover:text-green-600 mb-1">
                  <Link to="/">Terms and conditions</Link>
                </li>
                <li className="hover:text-green-600 mb-1">
                  <Link to="/">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:border-white md:border-l-2 basis-1/3 ">
          <div>
            <h4 className="text-xl mb-3">Store contact info</h4>
            <div>
              <div className="flex flex-row gap-2 items-center mb-2">
                <FaPhone />
                <h4>Phone : </h4>
                <p>+94 762596107</p>
              </div>
              <div className="flex flex-row gap-2 items-center mb-2">
                <FaFax />
                <h4>Fax : </h4>
                <p>+94 762596107</p>
              </div>
              <div className="flex flex-row gap-2 items-center mb-2">
                <MdEmail />
                <h4>Mail : </h4>
                <p>info@pet.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-5">
              <Link to="/">
                {" "}
                <FaFacebook className="hover:text-green-600" />
              </Link>
              <Link to="/">
                <FaInstagram className="hover:text-green-600" />
              </Link>
              <Link to="/">
                <FaLinkedin className="hover:text-green-600" />
              </Link>
              <Link to="/">
                <FaXTwitter className="hover:text-green-600" />
              </Link>
              <Link to="/">
                <FaPinterest className="hover:text-green-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 bg-slate-200  " />
      <div>
        <p className="text-center bg-stone-900 text-white p-3">
          &copy; 2024 PetShop. All rights reserved
        </p>
      </div>
    </footer>
  );
}
