import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {auth} from "../utils/firebase";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userAvatar } from "../utils/constants";






const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormsg,setErrorMsg]=useState(null);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleBtnClick=()=>{
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMsg(message)
        if(message) return;
        //sign in /up logic
        if(!isSignInForm){
          //signup logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // update user
            updateProfile(user, {
              displayName: name.current.value, photoURL: userAvatar
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
  
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
              
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
              setErrorMsg(error.message)
            });
   


            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode+" "+errorMessage)
            // ..
          });
        } 
        else{
          // sign in logic

          
          signInWithEmailAndPassword( 
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode + "-" + errorMessage);
            });
          
        }

  }
  return (
    <div className="h-screen">
      <Header />
      <div className="absolute">
        <img className="hidden lg:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-full my-0 lg:my-36 lg:w-3/12 lg:absolute h-screen lg:h-fit p-12  bg-black   mx-auto right-0 left-0 text-white lg:bg-opacity-80">
        <h1 className="font-bold text-white text-3xl py-4 mt-20 lg:mt-0">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input ref = {name}
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
        <button onClick={handleBtnClick} className="font-bold p-4 my-1 bg-red-700 rounded-lg text-white w-full">
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
