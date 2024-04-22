import Breadcrumb from "@/components/common/breadcrumb"
import PropertyOverview from "./components/property-overview"
import ScheduleTour from "./components/schedule-tour"
import { houses } from "@/constants/general"

const PropertyDetail = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col">
      <div className="py-5">
        <Breadcrumb
          homeElement={"Property Details"}
          separator={<span> | </span>}
          activeClasses="text-primary-900"
          containerClasses="flex-start py-4"
          listClasses="hover:underline mx-2 body-regular"
          capitalizeLinks
        />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <PropertyOverview property={houses[0]} />
        <ScheduleTour />
      </div>
    </div>
  )
}

export default PropertyDetail