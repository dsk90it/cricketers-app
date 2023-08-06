import Home from './pages/Home'
import Details from './pages/Details'
import { useCricketContext } from './context/CricketContext'

function App() {
  const { state } = useCricketContext()

  return (
    <main className="mx-auto px-4 pb-10 max-w-2xl">
      {!state.selectedCricketer ? <Home /> : <Details />}
    </main>
  )
}

export default App
