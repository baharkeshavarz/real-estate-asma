import React from "react"
import { CircularProgress } from "@mui/material"
import Logo from "@/components/layout/logo"

interface LoadingProps {
  t: any
  size?: number
}

const Loading = ({ t, size = 30 }: LoadingProps) => {
  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
      <div className="m-auto max-h-[700px] rounded-lg bg-white p-4">
        <div className="flex w-full flex-col items-center gap-4 p-2 sm:h-[150px] sm:w-[300px]">
          <Logo classes="w-16 h-12" />
          <div className="flex items-center justify-center gap-1">
            <CircularProgress size={size} color="info" />
            <span>{t.messages.loading}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
