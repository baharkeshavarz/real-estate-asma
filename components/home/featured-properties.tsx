import React from "react"
import Tooltip from "../common/ui/tooltip"

const FeaturedProperties = () => {
  return (
    <div className="flex-center flex-col">
      <div className="flex-center flex-col text-center">
        <h1 className="h1-bold pb-3 pt-9">Featured properties</h1>
        <h4 className="h4-bold py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo
        </h4>
      </div>

      <ul className="flex-center gap-x-5 body-regular py-5">
        <li>
          <Tooltip message="8 Property">
            <span className="p-2 bg-white shadow-md cursor-pointer hover:text-primary-800">Houses</span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="6 Property">
          <span className="p-2 bg-white shadow-md cursor-pointer hover:text-primary-800">Smart Home</span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="5 Property">
          <span className="p-2 bg-white shadow-md cursor-pointer hover:text-primary-800">Apartments</span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="5 Property">
          <span className="p-2 bg-white shadow-md cursor-pointer hover:text-primary-800">Office</span>
          </Tooltip>
        </li>

        <li>
          <Tooltip message="5 Property">
          <span className="p-2 bg-white shadow-md cursor-pointer hover:text-primary-800">Villa</span>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}

export default FeaturedProperties
