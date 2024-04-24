"use client"

import Select from "react-select"
import { useState } from "react"
import FilterTitle from "./filter-title"

interface FilterLocationProps {
  t: any
}

const FilterLocation = ({ t }: FilterLocationProps) => {
  const [citites, setCitites] = useState([])

  return (
    <div className="flex flex-col">
      <FilterTitle title={t("property.location")}/>
      <div className="">
        <Select
          options={citites || []}
          onChange={() => {}}
          autoFocus={true}
          placeholder={t("property.allCities")}
          className="body-regular"  
        />
      </div>
    </div>
  )
}

export default FilterLocation
