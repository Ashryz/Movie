import React, { useEffect, useState } from 'react'
import { LINKS_API, LINKS_API_KEY } from '../Links';
import { MovieCard } from '../components/MovieCard';
import { useSelector } from 'react-redux';
const moviesURL = LINKS_API;
const apiKey = LINKS_API_KEY;

function TopRated() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setTopMovies(data.results)
    }

    const myLang = useSelector((state) => state.compineLang.lang)
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?language=${myLang}&${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [myLang])

    return (
        <div className="container">
            <h2 className="mb-2 py-5 ">Top Rated</h2>
            <div className="card_parent row-gap-sm-5">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>)
}

export default TopRated