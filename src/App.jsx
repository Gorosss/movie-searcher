import { useCallback, useState} from 'react'
import './css/App.css'
import './css/Navbar.css'

import {Movies} from './components/Movies.jsx'
import {useMovies} from './hooks/useMovies.jsx'
import {useSearch} from './hooks/useSearch.jsx'
import debounce from 'just-debounce-it'




//Api https://www.omdbapi.com/?apikey=5d53d94e&s=Avengers
 
function App() {  

  
  const [sortYear, setSortYear] = useState(false)
  const {search, updateSearch, error} = useSearch()  
  const {mappedSearchResult, getMovies, loading} = useMovies({search, sortYear})


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

  const handleSortYear = () => {
    setSortYear(!sortYear)
  }

  return (
    <div className='page'>
      
      <header>
      <div className='nav'>
      <div className='logo'>
        Movie Searcher
      </div>
      <div className='search'>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder='Spiderman, Star Wars ...'/>
          <input type='checkbox' onChange={handleSortYear} checked={sortYear}/>
          <button type='submit'> Search </button>
        </form>
      </div>
    </div>
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
