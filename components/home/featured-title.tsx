import React from "react"
import Tooltip from "../shared/tooltip"
import { useTranslations } from "next-intl"

const FeaturedTitle = () => {
  const t = useTranslations()
  return (
    <div className="flex-center flex-col">
      <div className="flex-center flex-col text-center">
        <h1 className="sm:h1-bold h3-bold pb-2 pt-9">
          {t("pages.home.latestProperties")}
        </h1>
        <h4 className="h5-bold pb-2 text-secondary-300">
          {t("pages.home.latestPropertiesMsg")}
        </h4>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 body-regular sm:gap-5 gap-3 py-5">
        <div>
          <Tooltip message="8 Property">
            <span className="cursor-pointer bg-white p-2 text-primary-900 shadow-md hover:text-primary-900">
              Houses
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip message="6 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Smart Home
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Apartments
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Office
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Villa
            </span>
          </Tooltip>
        </div>

        <div>
          <Tooltip message="5 Property">
            <span className="cursor-pointer bg-white p-2 shadow-md hover:text-primary-900">
              Land
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTitle
