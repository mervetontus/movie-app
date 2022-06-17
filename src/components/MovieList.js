import React from "react";
import "../style/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";


const MovieList=(props)=>{
    return (
    <div>   
    {props.movies.map((movie,index)=>
        <div className="movie-box">
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <p className="imdbID">{movie.imdbID}</p>
        </div>
    )}
    </div>
    
    );
    
}

export default MovieList;