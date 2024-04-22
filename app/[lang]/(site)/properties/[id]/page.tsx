import PropertyOverview from "./components/property-overview"
import ScheduleTour from "./components/schedule-tour"
import { houses } from "@/constants/general"
import PropertyTopView from "./components/property-top-view"

const PropertyDetail = () => {
  return (
    <>
      <PropertyTopView property={houses[0]} />
      <div className="mx-auto mt-10 flex max-w-5xl flex-col">
        <div className="flex flex-col gap-5 md:flex-row">
          <PropertyOverview property={houses[0]} />
          <ScheduleTour />
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
