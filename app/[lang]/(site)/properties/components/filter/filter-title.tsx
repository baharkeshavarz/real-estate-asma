import React from "react"

interface FilterTitleProps {
  title: string
}

const FilterTitle = ({ title }: FilterTitleProps) => {
  return <h3 className="paragraph-regular text-secondary-900 mb-4">{title}</h3>
}

export default FilterTitle
