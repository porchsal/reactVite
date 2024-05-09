
import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState } from 'react'

function useQuery() {
const [query, updateQuery] = useState('')
  const [error, setError] = useState(null)

useEffect(() => {
    if (query === '') {
      setError("Please enter a movie title")
      return
    }
    if (query.match(/^\d+$/)) {
      setError("Numbers are not allowed")
      return
    }
    if (query.length < 3) {
      setError("Please enter at least 3 characters")
      return
    }
    setError(null)
  }, [query])

  return { query, updateQuery, error }

}

export default function App() {
  //const { movies: mappedMovies } = useMovies()
  const {movies} = useMovies()
  //const inputRef = useRef()
  const { query, updateQuery, error } = useQuery()
  const handleSubmit = (event) => {
    //const inputEl = inputRef.current
    //const value = inputEl.value
   event.preventDefault()
  //  const { query } = Object.fromEntries(
  //   new FormData(event.target)
  //   )
  //  console.log({query})
  }

  const handleChange = (event) => {
    updateQuery(event.target.value)
  }

  
  return (
  <div className='page'>  
  
    <header>  
      <form className='form' onSubmit={handleSubmit}>
        <h1>Movie Search</h1>
        {/* <input type="text" ref={inputRef} placeholder="Avengers, Matrix, Star Wars..." /> */}
        <input onChange={handleChange} value={query} name='query' placeholder="Avengers, Matrix, Star Wars..." />
        <button type="submit" >Search</button>
      </form>
      {error && <p style={{color: 'red'}} className='error'>{error}</p>}
    </header>
    <main>
      {/* <Movies movies={mappedMovies} /> */}
      <Movies movies={movies} />
    </main>
  
  </div>
  )
}
