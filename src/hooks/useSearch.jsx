import { useState , useEffect} from 'react'

export function useSearch(){
    const [search, updateSearch] = useState()
    const [error, setError] = useState(null)
  
    useEffect(() => {
        if(search === ''){
          setError('There is no movie to search')
          return 
        }
    }),[search]
    return {search, updateSearch, error}
  }
  