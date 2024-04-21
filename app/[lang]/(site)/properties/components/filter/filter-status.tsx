import React from "react"
import FilterTitle from "./filter-title"

const FilterStatus = () => {
  return (
    <div className="flex flex-col">
      <FilterTitle title="Listing Status"/>
      <ul className="paragraph-regular w-full rounded-lg text-secondary-800">
        <li className="w-full">
          <div className="flex items-center">
            <input
              id="list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className="h-5 w-5 text-black focus:ring-2 focus:ring-black accent-black no-focus"
            />
            <label
              htmlFor="list-radio-license"
              className="body-regular ms-2 w-full py-2.5 text-secondary-800 cursor-pointer"
            >
              All
            </label>
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-center">
            <input
              id="list-radio-id"
              type="radio"
              value=""
              name="list-radio"
              className="h-5 w-5 text-black focus:ring-2 focus:ring-black accent-black no-focus"
            />
            <label
              htmlFor="list-radio-id"
              className="body-regular ms-2 w-full py-2.5 text-secondary-800"
            >
              Buy
            </label>
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-center">
            <input
              id="list-radio-military"
              type="radio"
              value=""
              name="list-radio"
              className="h-5 w-5 text-black focus:ring-2 focus:ring-black accent-black no-focus"
            />
            <label
              htmlFor="list-radio-military"
              className="body-regular ms-2 w-full py-2.5 text-secondary-800"
            >
              Rent
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FilterStatus
