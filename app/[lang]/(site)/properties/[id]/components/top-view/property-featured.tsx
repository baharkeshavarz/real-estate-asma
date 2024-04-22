import React from "react"
import PropertyCard from "./feature-card"
import { LiaBedSolid } from "react-icons/lia"
import { LiaBathSolid } from "react-icons/lia"
import { SlSizeActual } from "react-icons/sl"
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineFolderOpen } from "react-icons/hi";

const PropertyFeatured = () => {
  return (
    <div className="mx-auto max-w-6xl sm:p-10 p-2">
      <div className="grid grid-cols-1 gap-5 sm::grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <PropertyCard icon={LiaBedSolid} title="Bedroom" value={3} />
        <PropertyCard icon={LiaBathSolid} title="Bath" value={4} />
        <PropertyCard icon={HiOutlineCalendar} title="Year Built" value={2020} />
        <PropertyCard icon={HiOutlineHome} title="Garage" value={2} />
        <PropertyCard icon={SlSizeActual} title="Sqft" value={1200} />
        <PropertyCard icon={HiOutlineFolderOpen} title="Property Type" value="Houses" />
      </div>
    </div>
  )
}

export default PropertyFeatured
