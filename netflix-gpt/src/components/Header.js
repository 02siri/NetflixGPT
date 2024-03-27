import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  //for language support 
  const handleLanguageChange = (e) =>{
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  //only when gpt search is clicked, we need lang support 
  //also for home page function
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(store=>store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      //navigate("/");
      //everytime you log in log out, auth will be called inside header 
      //so no need
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  const handleGptSearchClick = () =>{
    //Toggle GPT Search Button 
    dispatch(toggleGptSearchView());
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName, photoURL} = user;

        //if user is present, sign in case 
        //adding to our store 
        dispatch(
          addUser({uid:uid, 
            email:email, 
            displayName: displayName, 
            photoURL: photoURL}));
        //redirect to browse page 

        //if user is logged in
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
       navigate("/");
      }
    });    


    //cleaning up : unsubscribe the event whenever component unmounts 
    //unsubscribe() is prebuilt function of firebase 

    return () => unsubscribe();


  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between'>
    <img alt='logo' className='w-44 mx-auto md:mx-0' src= {LOGO} />
    
    {user && (<div className='flex p-2 justify-between '>
      
      {showGptSearch&&(<select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
    </select>)}
      

      <button 
      onClick={handleGptSearchClick}
      className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>
       {showGptSearch?"Home Page":"GPT Search"}
      </button>
      <img className='w-12 h-12 hidden md:block' alt="user-icon" 
      src={user.photoURL}/>
      
      <button 
      
      className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
    </div>)}
    
    </div>
  )
}

export default Header