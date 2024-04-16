import React from "react"

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return <div className="mx-auto min-h-screen max-w-6xl">{children}</div>
}

export default LayoutWrapper
