import React from "react"
import FilterTitle from "./filter-title"

interface FilterStatusProps {
  t: any
}

const FilterStatus = ({ t }: FilterStatusProps) => {
  return (
    <div className="flex flex-col">
      <FilterTitle title={t("property.listingStatus")}/>
      <ul className="paragraph-regular w-full rounded-lg text-secondary-800">
        <li className="w-full">
          <div className="flex items-center">
            <input
              id="list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              className="no-focus h-5 w-5 text-black accent-black focus:ring-2 focus:ring-black"
            />
            <label
              htmlFor="list-radio-license"
              className="body-regular ms-2 w-full cursor-pointer py-2.5 text-secondary-800"
            >
              {t("general.all")}
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
              className="no-focus h-5 w-5 text-black accent-black focus:ring-2 focus:ring-black"
            />
            <label
              htmlFor="list-radio-id"
              className="body-regular ms-2 w-full py-2.5 text-secondary-800"
            >
              {t("general.buy")}
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
              className="no-focus h-5 w-5 text-black accent-black focus:ring-2 focus:ring-black"
            />
            <label
              htmlFor="list-radio-military"
              className="body-regular ms-2 w-full py-2.5 text-secondary-800"
            >
              {t("general.rent")}
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FilterStatus
