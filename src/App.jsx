import { useEffect, useState } from 'react'

import getPlayers from './data/get-players'
import Home from './pages/Home'
import Details from './pages/Details'
import MainLayout from './layout/MainLayout'

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
    <MainLayout>
      {!selectedPlayer ? (
        <Home content={players} />
      ) : (
        <Details player={selectedPlayer} handleBack={() => setSelectedPlayer(null)} />
      )}
    </MainLayout>
  )
}

export default App
