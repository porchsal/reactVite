
import './App.css'
import  responseMovies from './mocks/with-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search

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
      <Movies movies={movies} />
    </main>
  
  </div>
  )
}

export default App
