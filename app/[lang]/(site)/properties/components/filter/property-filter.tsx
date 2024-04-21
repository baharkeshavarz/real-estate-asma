import FilterItemCounts from "./filter-item-counts-"
import FilterPriceRange from "./filter-range"
import FilterStatus from "./filter-status"
import FilterType from "./filter-type"

const PropertyFilter = () => {
  return (
    <div className="rounded-md border border-secondary-200 w-[320px] p-5 flex flex-col gap-y-5">
       <FilterStatus/>
       <FilterType/>
       <FilterPriceRange/>
       <FilterItemCounts title="Bedrooms"/>
       <FilterItemCounts title="Bathrooms"/>
    </div>
  )
}

export default PropertyFilter
