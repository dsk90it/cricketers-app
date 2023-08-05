import { ageInYears, regularFormat } from '../utils'

function List({ items, onListClick }) {
  if (items.length === 0) {
    return <p>No players found.</p>
  }

  return (
    <ul className="w-full">
      {items.map((list) => {
        const { id } = list
        return <ListItem key={id} {...list} handleClick={(id) => onListClick(id)} />
      })}
    </ul>
  )
}

// ListItem
function ListItem({ name, type, points, dob, id, handleClick }) {
  console.log('re-render: list item')

  return (
    <li
      className="flex items-center space-x-4 py-2 px-3 cursor-pointer border-b border-gray-200 hover:bg-gray-100 hover:text-blue-500"
      onClick={() => handleClick(id)}
    >
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate">{name}</p>
        <span className="text-sm text-gray-500 truncate">
          {ageInYears(dob)} {type && ` / ${regularFormat(type)}`}
        </span>
      </div>
      <div className="inline-flex text-slate-900 items-center font-semibold">{points}</div>
    </li>
  )
}

export default List
