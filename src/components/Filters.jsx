import { IconFilter } from './Icons'

function Filters({ heading, handleChange, value }) {
  return (
    <section className="flex w-full gap-4 my-8 items-center justify-between">
      <h1 className="text-xl font-semibold sm:text-2xl">{heading}</h1>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconFilter />
        </div>

        <select
          id="countries"
          className="inline-block rounded-lg p-2 pl-8 text-sm focus:outline-blue-500 bg-gray-50 border border-gray-300"
          onChange={handleChange}
          value={value}
        >
          <option value="Name">Name</option>
          <option value="Age">Age</option>
          <option value="Type">Type</option>
          <option value="Points">Points</option>
        </select>
      </div>
    </section>
  )
}
export default Filters
