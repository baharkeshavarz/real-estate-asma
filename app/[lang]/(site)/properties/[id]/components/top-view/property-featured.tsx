import React from "react"
import FeaturedBoxCard from "./featured-box-card"
import { LiaBedSolid } from "react-icons/lia"
import { LiaBathSolid } from "react-icons/lia"
import { SlSizeActual } from "react-icons/sl"
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { useTranslations } from "next-intl"

const PropertyFeatured = () => {
  const t = useTranslations()
  return (
    <div className="mx-auto max-w-6xl sm:p-10 p-2">
      <div className="grid grid-cols-1 gap-5 sm::grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <FeaturedBoxCard icon={LiaBedSolid} title={t("property.beds")} value={3} />
        <FeaturedBoxCard icon={LiaBathSolid} title={t("property.baths")} value={4} />
        <FeaturedBoxCard icon={HiOutlineCalendar} title={t("property.yearBuilt")} value={2020} />
        <FeaturedBoxCard icon={HiOutlineHome} title={t("property.garage")} value={2} />
        <FeaturedBoxCard icon={SlSizeActual} title={t("property.sqft")} value={1200} />
        <FeaturedBoxCard icon={HiOutlineFolderOpen} title={t("property.propertyType")} value="Houses" />
      </div>
    </div>
  )
}

export default PropertyFeatured
