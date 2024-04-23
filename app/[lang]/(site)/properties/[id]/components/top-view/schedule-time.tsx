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
        <div className="pt-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="text-secondary-900 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
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
