import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../components/MovieCard';


export const Favorites = () => {
    const favorites = useSelector((state => state.combinefavo.favorites))

    return (
        <div className="container ">
            <h3 className='title'>Favorites Movies:</h3>
            <div className='movies_container '>
               
                    {favorites.length > 0 ? (
                        favorites.map((movie, index) => (
                           
                                <MovieCard movie={movie} key={`${movie.id}-${index}`} />
                            
                        ))
                    ) : (
                        <div className='p-3 w-100 row'>
                            <p> No favorite Movies</p>
                        </div>
                    )}
                

            </div>
        </div>
    );
}