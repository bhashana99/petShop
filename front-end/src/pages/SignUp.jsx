import React from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({ });
  const [backEndErrors, setBackEndErrors] = useState([]); // State to store backend error messages
  const [errors, setErrors] = useState({}); // State to store field validation errors
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success

  const { email, password, username, cpassword } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    // Clear validation error message when user starts typing in the field
    setErrors({ ...errors, [e.target.id]: "" });
    // Clear backend error message when there's a change in email or username
    if (e.target.id === "email" || e.target.id === "username") {
      setBackEndErrors([]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform frontend validation before submitting the form
      const validationErrors = {};
      if (!username) {
        validationErrors.username = "Username is required";
      }
      if (!email) {
        validationErrors.email = "Email is required";
      }
      if (!password) {
        validationErrors.password = "Password is required";
      } else if (password.length < 5) {
        validationErrors.password =
          "Password must be at least 5 characters long";
      }
      if (!cpassword) {
        validationErrors.cpassword = "Confirm Password is required";
      }
      if (password !== cpassword) {
        validationErrors.cpassword = "Passwords do not match";
      }
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return; // Don't submit the form if there are validation errors
      }

      // If no validation errors, submit the form
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
        cpassword: user.cpassword,
      });
      setRegistrationSuccess(true); // Set registration success to true
    
    } catch (error) {
      console.error("Error occurred while registering:", error);
      if (error.response && error.response.data) {
        setBackEndErrors([error.response.data]);
      } else {
        setBackEndErrors(["An unexpected error occurred"]);
      }
    }
  };

  return (
    <div className="max-w-3xl flex  justify-center  text-center my-8  mx-auto font-light ">
      <div>
        <h2 className="text-4xl  font-bold mb-5">Sign Up</h2>
        <div>
          <p>Create your account</p>
        </div>
        <div className="mt-5">
          {backEndErrors.map((error, index) => (
            <div key={index} className="error" style={{ color: "red" }}>
              {error}
            </div>
          ))}{" "}
          {/* Display backend error messages */}
          {registrationSuccess && (
            <div className="success" style={{ color: "green" }}>
              Verification email sent
            </div>
          )}{" "}
          {/* Display success message */}
          <form onSubmit={onSubmit}>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center">
              <FaUser className="text-xl text-slate-700" />
              <input
               onChange={onInputChange}
                value={username}
                type="text"
                placeholder="Username"
                id="username"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
               {errors.username && (
            <div className="error" style={{ color: "red" }}>
              {errors.username}
            </div>
          )}{" "}
          {/* Display username error message */}
            </div>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center mt-5">
              <MdEmail className="text-xl text-slate-700" />
              <input
               onChange={onInputChange}
               value={email}
                type="email"
                placeholder="Email"
                id="email"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
              {errors.email && (
            <div className="error" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}{" "}
          {/* Display email error message */}
            </div>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center mt-5">
              <MdPassword className="text-xl text-slate-700" />
              <input
               onChange={onInputChange}
               value={password}
                type="password"
                placeholder="Password"
                id="password"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
              {errors.password && (
            <div className="error" style={{ color: "red" }}>
              {errors.password}
            </div>
          )}{" "}
          {/* Display password error message */}
            </div>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center mt-5">
              <MdPassword className="text-xl text-slate-700" />
              <input
               onChange={onInputChange}
                value={cpassword}
                type="password"
                placeholder="Confirm Password"
                id="cpassword"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
               {errors.cpassword && (
            <div className="error" style={{ color: "red" }}>
              {errors.cpassword}
            </div>
          )}{" "}
          {/* Display cpassword error message with red color */}
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
              <Link to="/sign-in">
                <span className="ml-5 text-fuchsia-700">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
