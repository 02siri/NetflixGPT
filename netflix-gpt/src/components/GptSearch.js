import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img className='h-screen object-cover' src= {BG_URL} alt='logo'/>
    </div>
      <div className=''>
          <GptSearchBar/>
          <GptMovieSuggesions/>
      </div>
    </>
    
  )
}

export default GptSearch