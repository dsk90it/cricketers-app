import { useDataContext } from '../context/DataContext'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import List from '../components/List'

function Home() {
  const { players, setSelectedPlayer } = useDataContext()

  const handleListClick = (id) => {
    const cricketer = players.find((c) => c.id === id)
    setSelectedPlayer(cricketer)
  }

  return (
    <>
      <Filters
        heading="Cricket Players"
        handleChange={(e) => console.log(e.target.value)}
      />
      <SearchBar
        handleChange={(e) => console.log('Search Query:', e.target.value)}
      />
      <List items={players} onListClick={(id) => handleListClick(id)} />
    </>
  )
}
export default Home
