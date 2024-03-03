import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () => {
    console.log('Sign out')
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error"); 
      
    });
  }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const { uid, email, displayName, photoURL } = user;
          
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          //redirect to browse page
          navigate('/browse')
          
          
          // ...
        } else {
          // User is signed out
  
          dispatch(removeUser());
          navigate('/')
        }
      });
      //unsubscribe when component unmounts 
      return()=> unsubscribe()
    }, []);

    const handleGptSearch=()=>{
      //Toggle gpt search
      dispatch(toggleGptSearch());
    }

    const handleLanguageChange=(e)=>{
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value))
    }
  
  return (
    <div className="flex justify-between absolute px-8 py-2 lg:h-fit lg:bg-gradient-to-b lg:from-black z-1 lg:w-screen">
        <img className="w-28 lg:w-44 z-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
         alt='logo'/>
         {user 
         && <div className="flex items-center gap-5"> 
         {showGptSearch && <select className='p-2 bg-gray-900 z-10 text-white m-2' onChange={handleLanguageChange}> 
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          
         </select>}
         <button className='bg-purple-800 px-4 m-2 rounded-lg text-white cursor-pointer z-40' onClick={handleGptSearch}> {showGptSearch ?"HomePage":"GPT Search"}</button>
          <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
          <button onClick={handleSignOut} className="text-white font-bold h-fit hover:cursor-pointer z-50">Sign Out</button>
         </div>}
    </div>
  )
}

export default Header