import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import './Movie.css'
import { LINKS_API, LINKS_API_KEY, LINKS_IMG } from '../Links'
import { useSelector } from 'react-redux'

const imageUrl = LINKS_IMG
const moviesURL = LINKS_API
const apiKey = LINKS_API_KEY

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setMovie(data)
  }
  const myLang = useSelector((state) => state.compineLang.lang)
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?language=${myLang}&${apiKey}`
    getMovie(movieUrl)
  }, [id,myLang])

  return <div className="movie_page">
    {movie && (
      <>
        <div className='bg-body-secondary p-2'>
          <img src={imageUrl + movie.poster_path} alt={movie.title} className='card-img-top' />
        </div>

        <p className="tag">{movie.tagline}</p>
        <div className="info">
          <BsWallet2 /> <strong>Title: </strong>
          <span>
            {movie.original_title}
          </span>
        </div>
        <div className="info Genres">
          <BsFillFileEarmarkTextFill /> <strong>Genres: </strong>
          <span>
            {movie.genres.map(genre => {
              return <span key={genre.id}>{genre.name}, </span>
            })}
          </span>
        </div>
        <div className="info">
          <BsHourglassSplit /> <strong>Duration: </strong>
          <span>
            {movie.runtime} minutes
          </span>
        </div>
        <div className="info description">
          <BsFillFileEarmarkTextFill /> <strong>Description: </strong>
          <span>
            {movie.overview}
          </span>
        </div>
      </>
    )}
  </div>
}