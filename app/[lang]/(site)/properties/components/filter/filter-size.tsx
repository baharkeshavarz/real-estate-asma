"use client"

import FilterTitle from "./filter-title"

const FilterSize = () => {
  return (
    <div className="flex flex-col">
      <FilterTitle title="Square Feet" />
      <div className="flex-center space-x-5">
        <input
          type="number"
          placeholder="Min"
          value=""
          className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
        />
        <span className="text-secondary-800">-</span>
        <input
          type="number"
          placeholder="Max"
          value=""
          className="mt-2 w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
        />
      </div>
    </div>
  )
}

export default FilterSize
