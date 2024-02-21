import React from "react";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-3xl flex  justify-center  text-center my-8  mx-auto font-light ">
      <div>
        <h2 className="text-4xl  font-bold mb-5">Sign Up</h2>
        <div>
          <p>Create your account</p>
        </div>
        <div className="mt-5">
          <form>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center">
              <FaUser className="text-xl text-slate-700" />
              <input
                type="text"
                placeholder="Username"
                id="username"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
            </div>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center mt-5">
              <MdEmail className="text-xl text-slate-700" />
              <input
                type="email"
                placeholder="Email"
                id="email"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
            </div>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center mt-5">
              <MdPassword className="text-xl text-slate-700" />
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
            </div>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center mt-5">
              <MdPassword className="text-xl text-slate-700" />
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
            </div>
            <div className="mt-5 bg-fuchsia-800 py-3 rounded-full">
              <button type="submit" className="text-white">
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-8 ">
            <p>
              Already have an account?{" "}
              <Link to="/sign-in"><span className="ml-5 text-fuchsia-700">Login</span></Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
