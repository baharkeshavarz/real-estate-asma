"use client"

import FilterYearBuilt from "./filter-built"
import FilterButton from "./filter-button"
import FilterItemCounts from "./filter-item-counts-"
import FilterLocation from "./filter-location"
import FilterPriceRange from "./filter-range"
import FilterSize from "./filter-size"
import FilterStatus from "./filter-status"
import FilterType from "./filter-type"

const PropertyFilter = () => {
  return (
    <div className="flex md:w-[320px] w-full flex-col gap-y-5 rounded-md border border-secondary-200 p-5">
      <FilterStatus />
      <FilterType />
      <FilterPriceRange />
      <FilterItemCounts title="Bedrooms" />
      <FilterItemCounts title="Bathrooms" />
      <FilterLocation />
      <FilterSize />
      <FilterYearBuilt />
      <FilterButton/>
    </div>
  )
}

export default PropertyFilter
