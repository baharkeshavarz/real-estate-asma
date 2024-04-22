import { houses } from "@/constants/general"
import PropertyCard from "./property-card"

const PropertyList = () => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 gap-8 px-4">
        {houses.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default PropertyList
