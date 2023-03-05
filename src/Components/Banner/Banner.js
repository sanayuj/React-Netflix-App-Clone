import React, { useEffect, useState } from "react";
import axios from "../../axios";
import {imageUrl} from "../../Constants/Constants";
import './Banner.css'
function Banner(props) {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
      // console.log(response.data.results);
    })
    
  },[props.url])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
      
    <div className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title:"9090909 "}</h1>
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie ? movie.overview:"dsfsdf "}
        </h1>
      </div>
      <div className="fade">
      </div>
    </div>
    </div>
  );
}

export default Banner;
