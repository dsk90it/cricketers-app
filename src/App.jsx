import Home from './pages/Home'
import Details from './pages/Details'
import { useDataContext } from './context/DataContext'

function App() {
  const { selectedPlayer } = useDataContext()

  return (
    <main className="mx-auto px-4 max-w-2xl">
      {!selectedPlayer ? <Home /> : <Details player={selectedPlayer} />}
    </main>
  )
}

export default App
