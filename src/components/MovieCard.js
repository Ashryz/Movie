import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { LINKS_IMG } from '../Links'
import {useDispatch, useSelector} from 'react-redux'
import { addFavorite, removeFavorite } from '../pages/store/FavoAction';

const imageUrl = LINKS_IMG



export const MovieCard = ({ movie, showLink = true }) => {

  const dispatch = useDispatch()
  const favorites = useSelector((state => state.combinefavo.favorites))

  const isItemInFavorites = (item)=>{
    return  favorites.some((favorite)=> favorite.id === item.id);
    
  }


  const handleToggleClick = (movie)=>{
    isItemInFavorites(movie) ? dispatch(removeFavorite(movie)) :
    dispatch(addFavorite(movie));
}
  





  return (

    <Card className='col-md-3 col-sm-6 '>
      <Card.Img variant="top" src={imageUrl + movie.poster_path} />
      <Card.Body>
        <Card.Title className='card_item-name'>{movie.title}</Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-between'>
            <p className="card-text d-flex ">
              <small className="text-muted">
                <FaStar className='fs-4 text-warning' />
                {movie.vote_average}
              </small>
            </p>
            <Link onClick={()=>handleToggleClick(movie)} style={{cursor:'pointer'}}>
              {isItemInFavorites(movie)? <FaHeart className='fs-5 text-danger ' /> :
              <FaRegHeart className='fs-5 text-danger ' />}
               </Link> 
        
          </div>

        </Card.Text>
        {showLink && <Link to={`/movie/${movie.id}`} className='btn btn-warning text-white w-100'>Details</Link>}
      </Card.Body>
    </Card>


  )
 }
// {/* <FaRegHeart className='fs-5 text-danger ' /> */}