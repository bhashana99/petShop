import React from "react";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({email: "",
  password: ""});
  const [error, setError] = useState("");

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    // Clear error message when user starts typing in the field
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Frontend validation
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      // Backend validation
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email: user.email,
          password: user.password,
        }
      );

      const token = response.data.accessToken;
      console.log(token);
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      console.log(decoded.role);

      //Assuming successful login navigates to dashboard
      navigate("/");
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="max-w-3xl flex  justify-center  text-center my-8  mx-auto font-light ">
      <div>
        <h2 className="text-4xl  font-bold mb-1">Welcome Back</h2>
        <div>
          <p>Enter your credential to login</p>
        </div>
        <div className="mt-10">
          <form onSubmit={onSubmit}>
            <div className="bg-fuchsia-200 flex flex-row py-3 p-2 rounded-lg items-center">
              <FaUser className="text-xl text-slate-700" />
              <input
                onChange={onInputChange}
                value={email}
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
                onChange={onInputChange}
                value={password}
                type="password"
                placeholder="Password"
                id="password"
                required
                className=" bg-fuchsia-200 outline outline-offset-1 outline-fuchsia-200 ml-5 pr-10"
              />
            </div>
            {error && (
              <div className="error" style={{ color: "red" }}>
                {error}
              </div>
            )}
            <div className="mt-5 bg-fuchsia-800 py-3 rounded-full">
              <button type="submit" className="text-white">
                Login
              </button>
            </div>
          </form>
          <div className="my-10 ">
            <p className="text-fuchsia-800">Forgot password?</p>
          </div>
          <div className="mt-8 ">
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up">
                <span className="ml-5 text-fuchsia-700">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;