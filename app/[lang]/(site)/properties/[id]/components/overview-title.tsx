import React from "react"

interface OverviewTitleProps {
  title: string
}

const OverviewTitle = ({ title }: OverviewTitleProps) => {
  return (
    <div className="border border-t-0 border-l-0 border-r-0">
       <h3 className="paragraph-medium text-secondary-900 mb-4">
        {title}
       </h3>
    </div>
  )
}

export default OverviewTitle
