import PropertyOverview from "./components/property-overview"
import ScheduleTour from "./components/schedule-tour"
import { houses } from "@/constants/general"
import PropertyTopView from "./components/property-top-view"
import LayoutWrapper from "@/components/layouts/layout-wrapper"

const PropertyDetail = () => {
  return (
    <>
      <PropertyTopView property={houses[0]} />
      <LayoutWrapper>
        <div className="flex flex-col gap-5 md:flex-row">
          <PropertyOverview property={houses[0]} />
          <ScheduleTour />
        </div>
      </LayoutWrapper>
    </>
  )
}

export default PropertyDetail
