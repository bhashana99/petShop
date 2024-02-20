import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Nav() {
  return (
    <div className="flex justify-between p-8 bg-black text-white">
      <div>
        <h1>PetShop Logo</h1>
      </div>
      <div className="">
        <ul className="flex  justify-between gap-8 uppercase ">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex justify-between gap-5 ">
        <CiShoppingCart className="text-2xl" />
        <CgProfile className="text-2xl" />
      </div>
    </div>
  );
}
