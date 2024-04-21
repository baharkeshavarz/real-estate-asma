import React from "react"
import FilterTitle from "./filter-title"

const FilterType = () => {
  const items = [
    {
      id: "type-1",
      title: "All"
    },
    {
      id: "type-2",
      title: "Houses"
    },
    {
      id: "type-3",
      title: "Apartments"
    },
    {
      id: "type-4",
      title: "Office"
    },
    {
      id: "type-5",
      title: "Villa"
    }
  ]
  return (
    <div className="flex flex-col">
      <FilterTitle title="Property Type"/>
      <ul className="paragraph-regular w-full rounded-lg text-secondary-800">
        {items.map(item => (
          <li key={item.id}>
            <div className="mb-4 flex items-center">
              <input
                id={item.title}
                type="checkbox"
                value=""
                className="h-4 w-4 rounded accent-black text-black focus:ring-2 focus:ring-black no-focus"
              />
              <label
                htmlFor={item.title}
                className="body-regular ms-2 w-full text-secondary-800 cursor-pointer"
              >
                {item.title}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterType
