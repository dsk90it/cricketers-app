import { createContext, useContext, useEffect, useReducer } from 'react'
import getPlayers from '../data/get-players'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import Errored from '../components/Error'
import { cricketersReducer, initialState } from '../reducer/reducer'

const CricketContext = createContext()

const CricketersProvider = ({ children }) => {
  const { isLoading, isError, data } = useFetch(getPlayers)
  const [state, dispatch] = useReducer(cricketersReducer, initialState)

  // Effect to set cricketers data and update state
  useEffect(() => {
    if (!isLoading && !isError) {
      dispatch({ type: 'SET_CRICKETERS_DATA', payload: data })
    }
  }, [isLoading, isError, data])

  // Effect to retain filter & search criteria on screen refresh using localStorage
  useEffect(() => {
    const savedSortedBy = localStorage.getItem('sortedBy')
    const savedSearchQuery = localStorage.getItem('searchQuery')
    const savedCurrentPage = localStorage.getItem('currentPage')

    if (savedSortedBy)
      dispatch({ type: 'SET_SORTED_BY', payload: savedSortedBy })
    if (savedSearchQuery)
      dispatch({ type: 'SET_SEARCH_QUERY', payload: savedSearchQuery })
    if (savedCurrentPage)
      dispatch({
        type: 'SET_CURRENT_PAGE',
        payload: parseInt(savedCurrentPage),
      })
  }, [])

  // Effect to update localStorage whenever filter & search criteria change
  useEffect(() => {
    localStorage.setItem('sortedBy', state.sortedBy)
    localStorage.setItem('searchQuery', state.searchQuery)
    localStorage.setItem('currentPage', state.currentPage)
  }, [state.sortedBy, state.searchQuery, state.currentPage])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Errored error={isError} />
  }

  return (
    <CricketContext.Provider value={{ state, dispatch }}>
      {children}
    </CricketContext.Provider>
  )
}

const useCricketContext = () => useContext(CricketContext)

export { CricketersProvider, useCricketContext }
