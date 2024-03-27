import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{

  //fetch trailer video using movie Id

  const dispatch = useDispatch();

  const getMovieVideos = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
    
    const json = await data.json();


    console.log(json);

    //finding trailer
    //json.results is array of 15
    const filterData = json.results.filter((video)=>video.type==="Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]; 
    //if any movie has 2 or n trailers or if trailer does not exist, take any video say first video

    //console.log(trailer);
    // settrailerid using state variable bhi kr sakte hai 
    dispatch(addTrailerVideo(trailer))


  }
  useEffect(()=>{
    getMovieVideos();
  },[]);
}

export default useMovieTrailer;