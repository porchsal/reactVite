function ListOfMovies({ movies }) {
    console.log(movies)
  return (
    <ul className="movies">
            {
              movies.map(movie => {
                return (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.title} />
                  </li>
                )
              })
            }
          </ul>
  )
}

function NoMoviesResult() {
    return
    (
    <p>No movies found</p>
)
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (        
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
     )     
    
}