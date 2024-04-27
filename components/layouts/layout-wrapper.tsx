import React from "react"

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return <div className="mx-auto mt-10 flex max-w-6xl flex-col">{children}</div>
}

export default LayoutWrapper
