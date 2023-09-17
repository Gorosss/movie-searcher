import { useState, useRef, useCallback } from 'react'
import { searchMovies } from '../apis/movies.js'



export function useMovies({search , sortYear}){

    const [mappedSearchResult, setMappedSearchResult] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const previusSearch = useRef(search)

    const getMovies = useCallback(async ({search}) => {
        if(search === previusSearch.current) return

        try {
            setLoading(true)
            setError(null)
            previusSearch.current = search
            const movies = await searchMovies({search})
            setMappedSearchResult(movies)

        } catch (e) {
            setError(e.message)
        }finally{
            setLoading(false)
        }
        
    },[])

    const sortedYearMovies = sortYear ?
        [... mappedSearchResult].sort((a,b) => b.year.localeCompare(a.year)) :
        mappedSearchResult

    return {mappedSearchResult : sortedYearMovies, getMovies, loading, error}

}