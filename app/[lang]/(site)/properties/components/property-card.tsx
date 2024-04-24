import Link from "next/link"
import Image from "next/image"
import { PropertyItem } from "@/types/property"
import { LiaBedSolid } from "react-icons/lia"
import { LiaBathSolid } from "react-icons/lia"
import { SlSizeActual } from "react-icons/sl"
import PropertyBadge from "@/components/home/property-badge"
import { useTranslations, useLocale } from "next-intl"

interface PropertyCardProps {
  property: PropertyItem
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const t = useTranslations()
  const lang= useLocale();
  return (
    <div className="flex flex-col rounded-md bg-white shadow-md sm:flex-row">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg sm:flex-1">
        <Link href={`/${lang}/properties/${property.id}`}>
          <Image
            src={property.img}
            alt={property.title}
            fill
            className="transition-all duration-300 hover:scale-110"
          />
        </Link>
        <span className="small-medium absolute bottom-2 left-1 rounded-sm bg-white p-2">
          {t("property.forRent")}
        </span>
      </div>
      <div className="card-details flex-1 px-5">
        <h1 className="body-medium py-3 text-black/80">{property.title}</h1>
        <h2 className="body-regular py-2 text-secondary-800">
          {property.location}
        </h2>
        <p className="py-1 text-[0.8rem]">
          An exceptional exclusive five bedroom apartment for sale in this much
          sought after development in Knightsbridge.
        </p>
        <div className="flex-start gap-x-3 pb-3 pt-5 sm:pb-0">
          <PropertyBadge
            icon={LiaBedSolid}
            title={t("property.beds")}
            size={16}
            value={property.beds}
          />
          <PropertyBadge
            icon={LiaBathSolid}
            title={t("property.baths")}
            size={16}
            value={property.baths}
          />
          <PropertyBadge
            icon={SlSizeActual}
            title={t("property.sqf")}
            size={16}
            value={property.sqft}
          />
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
