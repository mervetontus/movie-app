import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import "../style/Style.css";
import SearchBox from "./SearchBox";
import MovieInfo from "./MovieInfo";

const Movies = (props) => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('pokemon');

    const getMovieRequest = async () => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ee4556ef`
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

/*
const apiKey="ee4556ef";
useEffect(()=>{
    const fetchMovies= async()=>{
        const response = await MovieAPI
        .get(`?apiKey=${apiKey}&s=${searchValue}`)
        .catch((err)=>{
            console.log("Error:",err)
        })
        console.log(response)
    };
    fetchMovies();
},[]);
*/    

    return (
        <div>
            <div className="row d-flex align-items-center m-4">
                <h1 className="col header">Movies</h1>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div>
                <MovieList movies={movies}/>
            </div>
        </div>
    );
}

export default Movies;
