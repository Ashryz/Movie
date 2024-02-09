import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { MovieCard } from '../components/MovieCard'
import { LINKS_API_KEY, LINKS_SEARCH } from '../Links';

const searchURL = LINKS_SEARCH;
const apiKey = LINKS_API_KEY;

// import './MoviesGrid.css'

export const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  console.log(query)
  const [movies, setMovies] = useState([])

  const getSearchedMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setMovies(data.results)
    console.log(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
  }, [query])


  return (
    <div className="container">
      <h2 className="title">Results for: <span className="query_text">{query}</span></h2>
      <div className="row row-gap-sm-5">
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}