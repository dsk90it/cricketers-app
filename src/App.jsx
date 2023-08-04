import { useEffect, useState } from 'react'

import getPlayers from './data/get-players'
import List from './pages/List'
import Details from './pages/Details'

function App() {
  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playersData = await getPlayers()
        setPlayers(playersData)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Search Players</h1>

      {!selectedPlayer ? (
        <List items={players} handleClick={() => null} />
      ) : (
        <Details player={selectedPlayer} handleBack={() => setSelectedPlayer(null)} />
      )}
    </>
  )
}

export default App
