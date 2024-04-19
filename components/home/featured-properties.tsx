import React from "react"

import FeaturedTitle from "./featured-title"
import PropertyCard from "./property-card"

const FeaturedProperties = () => {
  const houses = [
    {
      id: 1,
      title: "Villa Belo a large superior luxury villa",
      price: "7500",
      currency: "$",
      beds: 4,
      baths: 6,
      sqft: 1150,
      img: "/assets/images/properties/property-1.jpg"
    },
    {
      id: 2,
      title: "Dream House",
      price: "98000",
      currency: "$",
      beds: 5,
      baths: 3,
      sqft: 1150,
      img: "/assets/images/properties/property-4.webp"
    },
    {
      id: 3,
      title: "Dream House in North",
      price: "150000",
      currency: "$",
      beds: 6,
      baths: 4,
      sqft: 1150,
      img: "/assets/images/properties/property-3.jpg"
    },
    {
      id: 4,
      title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      price: "1600",
      currency: "$",
      beds: 10,
      baths: 6,
      sqft: 500,
      img: "/assets/images/properties/property-1.jpg"
    },
    {
      id: 5,
      title: "Hillshire Ave, Baton Rouge, LA 70810, USA",
      price: "5000",
      currency: "$",
      beds: 1,
      baths: 3,
      sqft: 6500,
      img: "/assets/images/properties/property-4.webp"
    }
  ]
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
