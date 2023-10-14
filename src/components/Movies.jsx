import { useState } from 'react'


export function MoviesResult ({movies}){

    const handleImageError = () => {
        setImageSource('fallback.jpg');
        setAltText('Fallback image');
      };


    return (
        movies.map(movie => (
        
            
            <div className="poster-page" idmovie={movie.id}>
                {movie.poster !== "N/A" ? (
                    <img src={movie.poster} alt={movie.title} />
                    ) : (
                    <img src="src/img/noImage.png" alt="No Image" />
                    )}
                <span>{movie.title} ({movie.year} {movie.type})</span>
            </div>
       
        
        ))
    )
  }

export function NoMoviesResult (){
    return (
      <p> No movies found for this search</p>
    )
  }

export function Movies ({searchResult}){

    const movies = searchResult
    const hasMovies = movies?.length > 0

    return (
        
        hasMovies ? (
            <div className='movies'>
                <MoviesResult movies={movies}/>
            </div>
        ):
        <NoMoviesResult />
          
    )
}

export default Movies