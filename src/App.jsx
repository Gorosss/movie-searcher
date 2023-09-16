import { useCallback } from 'react'
import './css/App.css'
import {Movies} from './components/Movies.jsx'
import {useMovies} from './hooks/useMovies.jsx'
import {useSearch} from './hooks/useSearch.jsx'
import debounce from 'just-debounce-it'


//Api https://www.omdbapi.com/?apikey=5d53d94e&s=Avengers
 
function App() {  

  

  const {search, updateSearch, error} = useSearch()  
  const {mappedSearchResult, getMovies, loading} = useMovies({search})


  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 250),
    [getMovies]
  )

  const handleSubmit = (ev) => {
    ev.preventDefault()
    getMovies({search})
  }

  const handleChange = (ev) => {
    const newSearch = ev.target.value
    updateSearch(ev.target.value)
    debounceGetMovies(newSearch)
  }


  return (
    <div className='page'>
      <header>
        <h1>Movie Searcher</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder='Spiderman, Star Wars ...'/>
          <button type='submit'> Search </button>
        </form>
      </header>

      <main>
        {
          loading ? <p>Loading...</p> :  <Movies searchResult = {mappedSearchResult}/>
        }
       
      </main>
    </div>
  )
}

export default App
