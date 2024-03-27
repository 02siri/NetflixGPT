import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
//this will need a movie title/data
//data will come from store 
//from the selector 

const MainContainer = () => {

    //getting the data from the selector 

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    //optional chaining 

    //we have 20 movies here but we need one main movie 
    if(movies==null) return;
    // or use if(!movies) return;
    
    //to avoid store = null 
    //This is also known as early return 


    const mainMovie = movies[0];
    //console.log(mainMovie);

    const {original_title,overview,id} = mainMovie;


    //video background 

  return (
    <div className='pt-[30%] bg-black md:pt-0 md:bg-none'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    
    </div>
  )
}

export default MainContainer