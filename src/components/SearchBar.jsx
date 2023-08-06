import { IconSearch } from './Icons'

function SearchBar({ handleChange, value }) {
  return (
    <section className="relative w-full mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IconSearch />
      </div>

      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-blue-500"
        placeholder="Search players..."
        onChange={(e) => handleChange(e)}
        value={value}
      />
    </section>
  )
}
export default SearchBar
