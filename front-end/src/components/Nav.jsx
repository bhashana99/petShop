import Logo from '../components/images/Logo.jpg'
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {Link} from 'react-router-dom'

export default function Nav() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between p-8 bg-white text-black">
      <div className="flex"> 
        <img className="logo" src={Logo} alt="" />
        <h1 className="text-3xl logo-name font-semibold">PetZone</h1>
      </div>
      <div className="">
        <ul className=" justify-between gap-8 uppercase hidden md:flex font-medium text-2xl ">
          <Link to={"/"}><li>Home</li></Link>
          <Link><li>About</li></Link>
          <Link to={"/shop"}><li>Shop</li></Link>
          <Link><li>Contact</li></Link>
        </ul>
      </div>
      <div className="flex justify-between gap-5  ">
        <CiShoppingCart className="text-2xl" />
        <Link to="sign-in"> <CgProfile className="text-2xl" /></Link>
       
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="m-5">
          <h1>PetShop Logo</h1>
        </div>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Shop</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
