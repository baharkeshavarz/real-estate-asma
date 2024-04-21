"use client"

import Select from "react-select"
import { useState } from "react"
import FilterTitle from "./filter-title"

const FilterLocation = () => {
  const [citites, setCitites] = useState([])

  return (
    <div className="flex flex-col">
      <FilterTitle title="Location" />
      <div className="">
        <Select
          options={citites || []}
          onChange={() => {}}
          autoFocus={true}
          placeholder="All Cities"
          className="body-regular"
        />
      </div>
    </div>
  )
}

export default FilterLocation
