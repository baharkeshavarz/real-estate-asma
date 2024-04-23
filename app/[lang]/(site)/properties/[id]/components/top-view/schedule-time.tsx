import Card from "@/components/common/card"
import React from "react"
import { HiSearch } from "react-icons/hi"

const ScheduleTime = () => {
  return (
    <Card>
      <div className="flex flex-col ">
        <h1 className="base-semibold">Schedule a tour</h1>
        <p className="body-regular">Choose the most suitable day</p>
      </div>

      <div className="flex flex-col pt-5">
        <h1 className="base-semibold py-1">Tour Type</h1>
        <button
          type="submit"
          className="body-regular flex-center w-full rounded-lg bg-primary-500 p-2 text-white hover:bg-primary-800"
        >
          <HiSearch size={18} className="text-white" />
          Submit a Tour Request
        </button>
      </div>
    </Card>
  )
}

export default ScheduleTime
