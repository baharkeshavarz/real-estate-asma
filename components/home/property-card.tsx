import Link from "next/link"
import Image from "next/image"
import { PropertyItem } from "@/types/property"
import PropertyBadge from "./property-badge"
import { LiaBedSolid } from "react-icons/lia"
import { LiaBathSolid } from "react-icons/lia";
import { SlSizeActual } from "react-icons/sl";

interface PropertyCardProps {
  property: PropertyItem
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="flex flex-col rounded-md bg-white p-5 shadow-xl">
      <div className="relative h-[200px] w-full p-5 overflow-hidden">
        <Link href="/" className="p-2">
          <Image
            src={property.img}
            alt={property.title}
            fill
            className="object-cover rounded-xl"
            />
        </Link>
      </div>
      <h1 className="paragraph-regular py-2 min-h-[3.5rem]">{property.title}</h1>
      <h2 className="text-black/80 body-semibold py-1">
        {property.price} {property.currency}
      </h2>
      <div className="flex-between pt-5">
        <PropertyBadge icon={LiaBedSolid} title="Beds" />
        <PropertyBadge icon={LiaBathSolid} title="Baths" />
        <PropertyBadge icon={SlSizeActual} title="sqf" />
      </div>
      <div className="h-1 divide-y divide-gray-800"></div>
    </div>
  )
}

export default PropertyCard
