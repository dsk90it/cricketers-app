import { useState } from 'react'

import getPlayers from './data/get-players'
import Home from './pages/Home'
import Details from './pages/Details'
import useFetch from './hooks/useFetch'
import Loading from './components/Loading'
import Errored from './components/Error'

function App() {
  const { isLoading, isError, data } = useFetch(getPlayers)
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Errored error={isError} />
  }

  return (
    <>
      {!selectedPlayer ? (
        <Home content={data} />
      ) : (
        <Details player={selectedPlayer} handleBack={() => setSelectedPlayer(null)} />
      )}
    </>
  )
}

export default App
