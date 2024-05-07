
import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useRef } from 'react'

export default function App() {
  //const { movies: mappedMovies } = useMovies()
  const {movies} = useMovies()
  //const inputRef = useRef()

  const handleSubmit = (event) => {
    //const inputEl = inputRef.current
    //const value = inputEl.value
   event.preventDefault()
   const { query } = Object.fromEntries(
    new FormData(event.target)
    )
    console.log(query)
  }

  return (
  <div className='page'>  
  
    <header>  
      <form className='form' onSubmit={handleSubmit}>
        <h1>Movie Search</h1>
        {/* <input type="text" ref={inputRef} placeholder="Avengers, Matrix, Star Wars..." /> */}
        <input name='query' placeholder="Avengers, Matrix, Star Wars..." />
        <button type="submit" >Search</button>
      </form>
    </header>
    <main>
      {/* <Movies movies={mappedMovies} /> */}
      <Movies movies={movies} />
    </main>
  
  </div>
  )
}
