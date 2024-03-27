import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
//custom hook is nothing but a js function

const useNowPlayingMovies = () =>{


  //Reducing API calls , same you can do for other hooks as well, such as popular upcoming etc.
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);


  //fetching the data and putting into the movie store 

  const dispatch = useDispatch();

 

  //API CAll 
  // get now playing movies 

  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

    const json = await data.json();
    //console.log(json.results);
    //api is called twice because of Strict Mode in index.js 
    dispatch(addNowPlayingMovies(json.results));
  
  };
  
  // (!nowPlayingMovies getNowPlayingMovies()) you can use this also
  //only once and calling API
  useEffect(()=>{
    if(!nowPlayingMovies) getNowPlayingMovies();
    
  },[])

}

export default useNowPlayingMovies;
