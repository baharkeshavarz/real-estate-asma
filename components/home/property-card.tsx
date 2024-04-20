import Link from "next/link"
import Image from "next/image"
import { PropertyItem } from "@/types/property"
import PropertyBadge from "./property-badge"
import { LiaBedSolid } from "react-icons/lia"
import { LiaBathSolid } from "react-icons/lia"
import { SlSizeActual } from "react-icons/sl"

interface PropertyCardProps {
  property: PropertyItem
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="flex flex-col rounded-md bg-white p-5 shadow-xl">
      <div className="relative mx-auto h-[200px] w-full overflow-hidden rounded-lg">
        <Image src={property.img} alt={property.title} fill />
        <Link
          href=""
          className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0 transition-all duration-300 hover:opacity-40 "
        ></Link>
      </div>

      <h1 className="paragraph-regular min-h-[3.5rem] py-2">
        {property.title}
      </h1>
      <h2 className="body-semibold py-1 text-primary-900">
        {property.price} {property.currency}
      </h2>
      <div className="flex-between pt-5">
        <PropertyBadge icon={LiaBedSolid} title="Beds" value={property.beds} />
        <PropertyBadge
          icon={LiaBathSolid}
          title="Baths"
          value={property.baths}
        />
        <PropertyBadge icon={SlSizeActual} title="sqf" value={property.sqft} />
      </div>
      <div className="h-1 divide-y divide-gray-800"></div>
    </div>
  )
}

export default PropertyCard
