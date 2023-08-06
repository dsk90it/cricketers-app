import { useCricketContext } from '../context/CricketContext'
import { ageInYears, regularFormat } from '../utils'

function List({ items }) {
  const { dispatch } = useCricketContext()

  if (items.length === 0) {
    return <p>No players found.</p>
  }

  return (
    <ul className="w-full">
      {items.map((list) => {
        const { id, name, type, points, dob } = list
        return (
          <ListItem
            key={id}
            name={name}
            type={type}
            points={points}
            dob={dob}
            handleClick={() => {
              dispatch({ type: 'SET_SELECTED_CRICKETER', payload: list })
              dispatch({ type: 'SET_DETAILS_PAGE', payload: true })
            }}
          />
        )
      })}
    </ul>
  )
}

// ListItem
function ListItem({ name, type, points, dob, id, handleClick }) {
  return (
    <li
      className="flex items-center space-x-4 py-2 cursor-pointer border-b border-gray-200 hover:text-blue-500"
      onClick={() => handleClick(id)}
    >
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate">{name}</p>
        <span className="text-sm text-gray-500 truncate">
          {ageInYears(dob)} {type && ` / ${regularFormat(type)}`}
        </span>
      </div>
      <div className="inline-flex text-slate-900 items-center font-semibold">
        {points}
      </div>
    </li>
  )
}

export default List
