import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
//custom hook is nothing but a js function

const useTopRated = () =>{


  //fetching the data and putting into the movie store 

  const dispatch = useDispatch();

  //API CAll 
  // get now playing movies 

  const getTopRatedMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

    const json = await data.json();
    //console.log(json.results);
    //api is called twice because of Strict Mode in index.js 
    dispatch(addTopRatedMovies(json.results));
  
  };

  //only once and calling API
  useEffect(()=>{
    getTopRatedMovies();
  },[])

}

export default useTopRated;
