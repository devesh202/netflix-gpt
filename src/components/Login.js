import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormsg,setErrorMsg]=useState(null);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const handleBtnClick=()=>{
        console.log(email.current.value)
        console.log(password.current.value)
     
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMsg(message)

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12  bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign in " : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="name"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormsg}</p>
        <button onClick={handleBtnClick} className="font-bold p-4 my-6 bg-red-700 rounded-lg text-white w-full">
        {isSignInForm ? "Sign in " : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm} > 
          {isSignInForm
            ? "New to Neflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
