import { PropertyItem } from "@/types/property"
import { HiOutlineClock } from "react-icons/hi"
import { HiOutlineDocumentReport } from "react-icons/hi"

interface PropertyTopViewProps {
  property: PropertyItem
}

const PropertyTopDetail = ({ property }: PropertyTopViewProps) => {
  return (
    <div className="flex-between mx-auto max-w-6xl flex-col gap-5 sm:p-10 p-2 md:flex-row">
      <div className="property-detail flex flex-col gap-x-10 gap-y-3 text-white flex-1">
        <h1 className="h2-bold sm:py-2 py-7">{property.title}</h1>
        <h2 className="body-regular pb-1">
          4834 N 10th St, Philadelphia, PA 19141
        </h2>
        <div className="flex-start sm:space-x-2 space-x-1 pt-2">
          <div className="flex-center space-x-1">
            <span className="rounded-full bg-primary-500 p-2"></span>
            <span className="text-primary-500">For sale</span>
          </div>
          <span className="text-secondary-200">|</span>
          <div className="flex-center space-x-1">
            <HiOutlineClock />
            <span className=""> 1 years ago </span>
          </div>
          <span className="text-secondary-200">|</span>
          <div className="flex-center space-x-1">
            <HiOutlineDocumentReport />
            <span className="">8721</span>
          </div>
        </div>
      </div>

      <div className="property-price flex flex-col gap-5 text-white sm:w-fit w-full">
        <h3 className="h3-semibold">{property.currency}{property.price}</h3>
        <p className="paragraph-medium">$68.33/sq ft</p>
      </div>

    </div>
  )
}

export default PropertyTopDetail
