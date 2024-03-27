import React from 'react'
import Header from './Header'
import {useState,useRef} from 'react';
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BG_URL, USER_AVATAR} from '../utils/constants';


const Login = () => {
  
  const[isSignInForm, setIsSignInForm] = useState(true);

  const[errMessage, setErrorMessage] = useState(null);

 

  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //reference 

  const handleButtonClick = () =>{
    // //validate the form data 
    // checkValidData = 
    // make state variables or use useRef() hook to get reference to input box
    
    //console.log(email); whole object
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = checkValidData(email.current.value,password.current.value);
    //console.log(message);
    setErrorMessage(message);

    if(message) return;
    // message is present that means error message is present 

    //then you can proceed with Sign in/sign up
  
    //sign in/sign up
    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value, 
      //here you can insert github as well
      photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      // ...
      
      const {uid,email,displayName, photoURL} = auth.currentUser;

        //if user is present, sign in case 
        //adding to our store 
        dispatch(
          addUser({uid:uid, 
            email:email, 
            displayName: displayName, 
            photoURL: photoURL}));

      //putting all logic in the Header component 
      // no need to browse from Login
      
      //navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message)
    });


    //console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+errorMessage);
  });

    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    //console.log(user)
    //shifted to header only 
    //navigate("/browse")
  })
  .catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    //console.log(errorCode+"-"+errorMessage)
  });

    }




  }

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
    //if not true 
  };
 
  return (
    <div>
      <Header/>

      <div className='absolute'>

      <img src= {BG_URL} className='h-screen object-cover'
      alt='logo'/>
      </div>

      <form 
      onSubmit = {(e)=>e.preventDefault()}
      className='p-12 rounded-lg bg-opacity-80 bg-black absolute w-4/5 md:w-1/3 my-36 mx-auto right-0 left-0 text-white'>
      
      
      
      
      <h1 className='font-bold text-3xl py-4'>

        {isSignInForm ? "Sign In" : "Sign Up"}

      </h1>

      {!isSignInForm && (<input ref={name} type='text' placeholder="Full Name" className="p-4 my-4 bg-gray-600 w-full"/>
      )}

        <input 
        ref={email}
        type='text' placeholder="Email Address" 
        className="p-4 my-4 bg-gray-600 w-full"/>
        <input 
        ref={password}
        type='password' placeholder="Password" 
        className="p-4 my-4 bg-gray-600 w-full"/>
        
        <p className='text-red-500 font-bold text-lg py-2'>{errMessage}</p>
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> 

        {isSignInForm ? "Sign In" : "Sign Up"}
        
        </button>

        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
        
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}
        
        </p>

      </form>


    </div>
  )
}

export default Login