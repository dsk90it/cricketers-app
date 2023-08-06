// Initial state for the reducer
const initialState = {
  cricketersData: [],
  selectedCricketer: null,
  sortedBy: 'Name',
  searchQuery: '',
  currentPage: 1,
}

// Reducer function to handle state updates
const cricketersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CRICKETERS_DATA':
      return { ...state, cricketersData: action.payload }
    case 'SET_SELECTED_CRICKETER':
      return { ...state, selectedCricketer: action.payload }
    case 'SET_SORTED_BY':
      return { ...state, sortedBy: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
    case 'SET_BACK_PAGE':
      return { ...state, selectedCricketer: null }
    default:
      return state
  }
}

export { initialState, cricketersReducer }
