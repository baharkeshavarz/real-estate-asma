import Link from "next/link"
import Image from "next/image"
import { NeighborhoodItem } from "@/types/property"
import { useTranslations } from "next-intl"

interface NeighborhoodCardProps {
  property: NeighborhoodItem
}

const NeighborhoodCard = ({ property }: NeighborhoodCardProps) => {
  const t = useTranslations()
  return (
    <div className="flex-start flex-col shadow-xl">
      <div className="relative mx-auto h-[320px] w-full overflow-hidden rounded-xl ">
        <Image src={property.img} alt={property.title} fill />
        <Link
          href="#"
          className="absolute left-0 bottom-0 z-10 h-full w-full
           bg-black/80 opacity-20 transition-all duration-300 hover:opacity-40"
        ></Link>
      </div>

      <div className="absolute bottom-0 z-50 w-full p-2 text-white">
          <h1 className="base-bold capitalize">{property.title}</h1>
          <p className="body-regular pt-1">{property.count} {t("pages.home.listing")}</p>
      </div>
    </div>
  )
}

export default NeighborhoodCard
