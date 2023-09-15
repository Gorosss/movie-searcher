


export function MoviesResult ({movies}){
    return (
        movies.map(movie => (
        <li className='movie' key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.type} - {movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
        </li>
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
            <ul className='movies'>
                <MoviesResult movies={movies}/>
            </ul>
        ):
        <NoMoviesResult />
          
    )
}

export default Movies