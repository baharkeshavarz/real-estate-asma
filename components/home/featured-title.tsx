import React from "react"
import Tooltip from "../shared/tooltip"

const FeaturedTitle = () => {
  return (
    <div className="flex-center flex-col">
      <div className="flex-center flex-col text-center">
        <h1 className="h1-bold pb-2 pt-9">Discover the latest properties</h1>
        <h4 className="h5-bold pb-2 text-slate-400">
          A great plateform to buy, sell and rent your properties
        </h4>
      </div>

      <ul className="flex-center body-regular gap-x-5 py-5">
        <li>
          <Tooltip message="8 Property">
            <span className="cursor-pointer bg-white p-2 text-primary-900 shadow-md hover:text-primary-900">
              Houses
            </span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="6 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Smart Home
            </span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Apartments
            </span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Office
            </span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Villa
            </span>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}

export default FeaturedTitle
