import List from '../components/List'
import { useCricketContext } from '../context/CricketContext'
import { ageInYears, regularFormat } from '../utils'

function Details() {
  const { state, dispatch } = useCricketContext()
  const selectedCricketer = state.selectedCricketer

  // Filter similar players based on the selected cricketer's type
  const similarPlayers = state.cricketersData.filter(
    (cricketer) =>
      cricketer.type === selectedCricketer.type &&
      cricketer.id !== selectedCricketer.id
  )

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold my-8">
          {selectedCricketer.name}
        </h2>

        <button
          type="button"
          className="inline-flex items-center justify-center h-9 mr-3 px-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-300"
          onClick={() => dispatch({ type: 'SET_BACK_PAGE' })}
        >
          Back
        </button>
      </div>

      <div className="space-y-4 mb-10">
        <p>
          Age: {ageInYears(selectedCricketer.dob)}{' '}
          {selectedCricketer.type &&
            ` / Type: ${regularFormat(selectedCricketer.type)}`}
        </p>

        <p>Points: {selectedCricketer.points}</p>

        <p>{selectedCricketer.description}</p>
      </div>

      <h3 className="text-lg font-semibold mb-3">Similar Players</h3>
      <List items={similarPlayers} />
    </>
  )
}
export default Details
