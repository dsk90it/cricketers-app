import { createContext, useContext, useState } from 'react'
import getPlayers from '../data/get-players'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import Errored from '../components/Error'

const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const { isLoading, isError, data: players } = useFetch(getPlayers)
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [filterType, setFilterType] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // store data
  const defaultData = {
    players,
    filterType,
    setFilterType,
    searchQuery,
    setSearchQuery,
    selectedPlayer,
    setSelectedPlayer,
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Errored error={isError} />
  }

  return (
    <DataContext.Provider value={defaultData}>{children}</DataContext.Provider>
  )
}

const useDataContext = () => {
  return useContext(DataContext)
}

// eslint-disable-next-line react-refresh/only-export-components
export { DataContextProvider, useDataContext }
