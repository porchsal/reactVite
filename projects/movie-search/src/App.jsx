
import './App.css'
import responseMovies from './mocks/with-results.json'
import { Movies } from './components/Movies'

export function useMovies() {
    const movies = responseMovies.Search
    
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
    return { movies: mappedMovies }
}

export default function App() {
  const { movies: mappedMovies } = useMovies()
  
  return (
  <div className='page'>  
  
    <header>  
      <form className='form'>
        <h1>Movie Search</h1>
        <input type="text" placeholder="Avengers, Matrix, Star Wars..." />
        <button>Search</button>
      </form>
    </header>
    <main>
      <Movies movies={mappedMovies} />
    </main>
  
  </div>
  )
}
