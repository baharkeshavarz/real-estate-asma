import React from "react"

interface OverviewTitleProps {
  title: string
}

const OverviewTitle = ({ title }: OverviewTitleProps) => {
  return <h3 className="paragraph-medium text-secondary-900 mb-4">{title}</h3>
}

export default OverviewTitle
