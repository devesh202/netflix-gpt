import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error"); 
      
    });
  }
  return (
    <div className="flex justify-between absolute px-8 py-2 lg:h-fit lg:bg-gradient-to-b lg:from-black z-10 lg:w-screen">
        <img className="w-28 lg:w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
         alt='logo'/>
         {user 
         && <div className="flex items-center gap-5"> 
          <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
          <button onClick={handleSignOut} className="text-white font-bold bg-red-400 h-fit ">Sign Out</button>
         </div>}
    </div>
  )
}

export default Header