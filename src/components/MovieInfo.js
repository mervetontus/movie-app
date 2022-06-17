import React, { useEffect, useState } from "react";

const MovieInfo = (props) => {
    return (
        <div>
            {props.movies.map((movie, index) =>
                <div className="movie-box">
                    <img src={movie.Poster} alt="movie"></img>
                    <p>Title: {movie.Title}</p>
                    <p>Year: {movie.Year}</p>
                    <p>Rated: {movie.Rated}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Director: {movie.Director}</p>
                    <p>Actors: {movie.Actors}</p>
                </div>
            )}
        </div>
       
    );

}

export default MovieInfo;