
import './App.css'
import responseMovies from './mocks/with-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
  <div id='page'>  
  
    <header>  
      <form className='form'>
        <h1>Movie Search</h1>
        <input type="text" placeholder="Avengers, Matrix, Star Wars..." />
        <button>Search</button>
      </form>
    </header>
    <main>
      {
        hasMovies ? (
          <ul>
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
        : <p>No movies found</p>
      }
    </main>
  
  </div>
  )
}

export default App
