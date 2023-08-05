import Home from './pages/Home'
import Details from './pages/Details'
import { useDataContext } from './context/DataContext'

function App() {
  const { selectedPlayer } = useDataContext()

  return <>{!selectedPlayer ? <Home /> : <Details player={selectedPlayer} />}</>
}

export default App
