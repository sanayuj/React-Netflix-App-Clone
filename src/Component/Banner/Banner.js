import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            let index = Math.floor(Math.random() * 20);
            console.log(index); 
            setMovie(response.data.results[index])
            console.log(response.data.results[index]);
        })
    },[])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className="content">
            <h1 className='title'>{movie? movie.title  || movie.name:''}</h1>
            <div className='content-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className="description">{movie?movie.overview.slice(0, 500) :''}</h1>
        </div>
        <div className="fade_bottom"> </div>
    </div>
    )
}

export default Banner
