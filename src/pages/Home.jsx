import { useCricketContext } from '../context/CricketContext'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import List from '../components/List'
import Pagination from '../components/Pagination'

function Home() {
  const { state, dispatch } = useCricketContext()

  // Apply sorting and filtering based on sortedBy and searchQuery
  const filteredCricketers = state.cricketersData
    .filter(
      (cricketer) =>
        cricketer.name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase()) ||
        (cricketer.type &&
          cricketer.type
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase())) ||
        cricketer.points.toString().includes(state.searchQuery)
    )
    .sort((a, b) => {
      if (!a.hasOwnProperty('type')) a.type = null
      if (!b.hasOwnProperty('type')) b.type = null

      if (state.sortedBy === 'Name') return a.name.localeCompare(b.name)
      if (state.sortedBy === 'Age') return a.dob - b.dob
      if (state.sortedBy === 'Type') {
        // Sort null 'type' to the end
        if (a.type === null && b.type !== null) return 1
        if (a.type !== null && b.type === null) return -1
        return a.type.localeCompare(b.type)
      }
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
      <Filters
        heading="Cricket Players"
        handleChange={(e) =>
          dispatch({ type: 'SET_SORTED_BY', payload: e.target.value })
        }
      />

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
      <Pagination
        totalPages={totalPages}
        currentPage={state.currentPage}
        onPageChange={(pageNumber) => {
          dispatch({ type: 'SET_CURRENT_PAGE', payload: pageNumber })
        }}
      />
    </>
  )
}
export default Home
