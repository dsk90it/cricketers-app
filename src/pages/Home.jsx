import { useCricketContext } from '../context/CricketContext'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import List from '../components/List'

function Home() {
  const { state, dispatch } = useCricketContext()

  // Apply sorting and filtering based on sortedBy and searchQuery
  const filteredCricketers = state.cricketersData
    .filter((cricketer) =>
      cricketer.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (state.sortedBy === 'Name') return a.name.localeCompare(b.name)
      if (state.sortedBy === 'Age') return a.dob - b.dob
      if (state.sortedBy === 'Type') return a.type.localeCompare(b.type)
      if (state.sortedBy === 'Points') return b.points - a.points
    })

  // Pagination
  const pageSize = 6
  const totalCricketers = filteredCricketers.length
  const totalPages = Math.ceil(totalCricketers / pageSize)
  const startIndex = (state.currentPage - 1) * pageSize
  const paginatedCricketers = filteredCricketers.slice(
    startIndex,
    startIndex + pageSize
  )

  return (
    <>
      {/* Filter  */}
      <Filters heading="Cricket Players" />

      {/* Search */}
      <SearchBar
        value={state.searchQuery}
        handleChange={(e) =>
          dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })
        }
      />

      {/* Cricketers List */}
      <List items={paginatedCricketers} />

      {/* Pagination */}
      <div className="flex items-center py-4 text-sm justify-between">
        <p className="text-gray-500">
          Showing {state.currentPage}/{totalPages}
        </p>

        <div className="inline-flex gap-2">
          {/* Previous and Next buttons */}
          <button
            className={'disabled:hidden'}
            disabled={state.currentPage === 1}
            onClick={() =>
              dispatch({
                type: 'SET_CURRENT_PAGE',
                payload: state.currentPage - 1,
              })
            }
          >
            Prev
          </button>
          <button
            className={'disabled:hidden'}
            disabled={state.currentPage === totalPages}
            onClick={() =>
              dispatch({
                type: 'SET_CURRENT_PAGE',
                payload: state.currentPage + 1,
              })
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}
export default Home
