"use client"

import FilterTitle from "./filter-title"

const FilterYearBuilt = () => {
  return (
    <div className="flex flex-col">
      <FilterTitle title="Year Built" />
      <div className="flex-center space-x-5">
        <input
          type="number"
          placeholder="From"
          value=""
          className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
        />
        <span className="text-secondary-800">-</span>
        <input
          type="number"
          placeholder="To"
          value=""
          className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
        />
      </div>
    </div>
  )
}

export default FilterYearBuilt
