import React, { useEffect, useState } from 'react'
import { LINKS_API, LINKS_API_KEY } from '../Links';
import { MovieCard } from '../components/MovieCard';
import { useSelector } from 'react-redux';
const moviesURL = LINKS_API;
const apiKey = LINKS_API_KEY;

function Upcoming() {
  const [upComing, setUpComing] = useState([])

  const getnowPlayingMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setUpComing(data.results)
  }
  const myLang = useSelector((state) => state.compineLang.lang)
  useEffect(() => {
    const nowPlayingUrl = `${moviesURL}upcoming?language=${myLang}&${apiKey} `
    getnowPlayingMovies(nowPlayingUrl)
  }, [myLang])

  return (
    <div className="container">
      <h2 className="mb-2 py-5">Upcoming</h2>
      <div className="row row-gap-sm-5">
        {upComing.length === 0 && <p>Loading...</p>}
        {upComing.length > 0 && upComing.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>)
}

export default Upcoming