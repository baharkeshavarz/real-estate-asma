import { PropertyItem } from "@/types/property"
import PropertyTopDetail from "./top-view/property-top-detail"
import PropertyGallery from "./property-gallery"
import PropertyFeatured from "./top-view/property-featured"

interface PropertyTopViewProps {
  property: PropertyItem
}

const PropertyTopView = ({ property }: PropertyTopViewProps) => {
  return (
    <div className="min-h-96 bg-slate-900">
       <PropertyTopDetail property={property}/>
       {/* <PropertyGallery/> */}
       <PropertyFeatured />
    </div>
  )
}

export default PropertyTopView
