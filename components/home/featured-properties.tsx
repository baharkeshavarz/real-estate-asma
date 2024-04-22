import React from "react"
import FeaturedTitle from "./featured-title"
import PropertyCard from "./property-card"
import { houses } from "@/constants/general"

const FeaturedProperties = () => {
  return (
    <div className="flex-center flex-col py-5">
      <FeaturedTitle />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {houses.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProperties
