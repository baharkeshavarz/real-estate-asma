import React from "react"
import FilterTitle from "./filter-title"

const FilterPriceRange = () => {
  return (
    <div className="flex flex-col">
      <FilterTitle title="Price Range"/>
      <div className="relative mb-6">
        <label htmlFor="labels-range-input" className="sr-only">
          Labels range
        </label>
        <input
          id="labels-range-input"
          type="range"
          value="300"
          min="100"
          max="1000"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
        <span className="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">
          Min ($100)
        </span>
        <span className="absolute -bottom-6 start-1/3 -translate-x-1/2 text-sm text-gray-500 rtl:translate-x-1/2 dark:text-gray-400">
          $500
        </span>
        <span className="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">
          Max ($1000)
        </span>
      </div>
    </div>
  )
}

export default FilterPriceRange
