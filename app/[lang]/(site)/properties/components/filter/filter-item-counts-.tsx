"use client"

import { useState } from "react"
import FilterTitle from "./filter-title"
import { useLocale } from "next-intl"

interface FilterItemCountsProps {
  title: string
}
const FilterItemCounts = ({ title }: FilterItemCountsProps) => {
  const lang = useLocale();
  const [selectedItem, setSelectedItem] = useState(0)
  const items = [
    {
      id: "any",
      title: "any",
      value: "any"
    },
    {
      id: "plusone",
      title: "1+",
      value: "1+"
    },
    {
      id: "plustwo",
      title: "2+",
      value: "2+"
    },
    {
      id: "plusthree",
      title: "3+",
      value: "3+"
    },
    {
      id: "plusfour",
      title: "4+",
      value: "4+"
    },
    {
      id: "plusfive",
      title: "5+",
      value: "5+"
    }
  ]
  return (
    <div className="flex flex-col">
      <FilterTitle title={title} />
      <div className="flex-center">
        {items.map((item, index) => (
          <div
            className={`selection cursor-pointer border border-gray-500 p-2
                       ${index === 0 ? lang === "en" ? "rounded-l-lg" : "rounded-r-lg" : ""}
                       ${index === items.length - 1 ? lang === "en" ? "rounded-r-lg" : "rounded-l-lg" : ""}
                       ${selectedItem === index ? "border-[3px] border-r-2" : index !== items.length - 1 ?? " border-r-0"}
             `}
          >
            <input
              id={`${title}-${item.id}`}
              type="radio"
              value={item.value}
              onClick={() => setSelectedItem(index)}
            />
            <label
              htmlFor={`${title}-${item.id}`}
              className="body-regular ms-2 w-full cursor-pointer"
            >
              {item.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterItemCounts
