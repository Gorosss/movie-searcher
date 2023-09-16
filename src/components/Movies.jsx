


export function MoviesResult ({movies}){
    return (
        movies.map(movie => (
        

            <div className="poster-page" id={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <span>{movie.title}</span>
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