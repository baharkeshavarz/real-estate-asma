"use client"

import FilterYearBuilt from "./filter-built"
import FilterButton from "./filter-button"
import FilterItemCounts from "./filter-item-counts-"
import FilterLocation from "./filter-location"
import FilterPriceRange from "./filter-range"
import FilterSize from "./filter-size"
import FilterStatus from "./filter-status"
import FilterType from "./filter-type"
import { useTranslations } from "next-intl"

const PropertyFilter = () => {
  const t = useTranslations()
  return (
    <div className="flex md:w-[320px] w-full flex-col gap-y-5 rounded-md border border-secondary-200 p-5">
      <FilterStatus t={t} />
      <FilterType t={t} />
      <FilterPriceRange t={t} />
      <FilterItemCounts title={t("property.bedrooms")}/>
      <FilterItemCounts title={t("property.bathrooms")}/>
      <FilterLocation t={t} />
      <FilterSize t={t} />
      <FilterYearBuilt t={t} />
      <FilterButton t={t} />
    </div>
  )
}

export default PropertyFilter
