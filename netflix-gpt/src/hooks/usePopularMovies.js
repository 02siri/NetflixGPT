import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
//custom hook is nothing but a js function

const usePopularMovies = () =>{


  //fetching the data and putting into the movie store 

  const dispatch = useDispatch();

  //API CAll 
  // get now playing movies 

  const getPopularMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

    const json = await data.json();
    //console.log(json.results);
    //api is called twice because of Strict Mode in index.js 
    dispatch(addPopularMovies(json.results));
  
  };

  //only once and calling API
  useEffect(()=>{
    getPopularMovies();
  },[])

}

export default usePopularMovies;
