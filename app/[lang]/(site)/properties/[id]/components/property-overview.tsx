"use client"

import Card from "@/components/common/card"
import { PropertyItem } from "@/types/property"
import OverviewTitle from "./overview-title"
import { useState } from "react"
import dynamic from "next/dynamic"
import Loader from "@/components/common/loading/loader"
import FeaturedLinearCard from "./top-view/featured-linear-card"
import { HiCheck } from "react-icons/hi"
import { useTranslations } from "next-intl"

interface PropertyOverviewProps {
  property: PropertyItem
}

const PropertyOverview = ({ property }: PropertyOverviewProps) => {
  const t = useTranslations()
  const [latLng, setLatLng] = useState({
    lat: "21.100901",
    lng: "57.276123"
  })

  const Map = dynamic(() => import("@/components/common/map-js"), {
    loading: () => <Loader />,
    ssr: false
  })
  return (
    <div className="flex-start flex-1 flex-col">
      <Card>
        <OverviewTitle title={t("property.propertyDescription")}/>
        <div className="body-regular py-2 text-justify text-secondary-800">
          {property.description}
        </div>
      </Card>

      <Card>
        <OverviewTitle title={t("property.propertyDetails")} />
        <div className="grid grid-cols-1 gap-x-14 gap-y-3 px-2 pt-4 sm:grid-cols-2">
          <div className="flex-between">
            <p className="base-medium">{t("property.propertyID")}</p>
            <p className="body-regular">RT48</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.price")}</p>
            <p className="body-regular">$252,000</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.propertySize")}</p>
            <p className="body-regular">1500 Sq Ft</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.bathrooms")}</p>
            <p className="body-regular">3</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.bedrooms")}</p>
            <p className="body-regular">2</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.garage")}</p>
            <p className="body-regular">2</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.garageSize")}</p>
            <p className="body-regular">200 {t("property.sqft")}</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.yearBuilt")}</p>
            <p className="body-regular">2022</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("property.propertyType")}</p>
            <p className="body-regular">Apartment</p>
          </div>

          <div className="flex-between">
          <p className="base-medium">{t("property.propertyStatus")}</p>
            <p className="body-regular">{t("property.forSale")}</p>
          </div>
        </div>
      </Card>

      <Card>
        <OverviewTitle title={t("property.featured")}/> 
        <div className="grid grid-cols-1 gap-x-14 gap-y-3 px-2 pt-4 sm:grid-cols-2">
          <FeaturedLinearCard title="Air Conditioning" icon={HiCheck} />
          <FeaturedLinearCard title="Lawn" icon={HiCheck} />
          <FeaturedLinearCard title="Barbeque" icon={HiCheck} />
          <FeaturedLinearCard title="Dryer" icon={HiCheck} />
          <FeaturedLinearCard title="Outdoor Shower" icon={HiCheck} />
          <FeaturedLinearCard title="Washer" icon={HiCheck} />
          <FeaturedLinearCard title="TV Cable" icon={HiCheck} />
          <FeaturedLinearCard title="Swimming Pool" icon={HiCheck} />
          <FeaturedLinearCard title="Gym" icon={HiCheck} />
          <FeaturedLinearCard title="Refrigerator" icon={HiCheck} />
        </div>
      </Card>

      <Card>
        <OverviewTitle title={t("property.mapLocation")} />
        <div className="space-y-3 pt-4">
          <div className="flex-between">
            <p className="base-medium">{t("forms.address")}</p>
            <p className="body-regular">10425 Tabor St</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("forms.city")}</p>
            <p className="body-regular">Los Angeles</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">{t("forms.stateCcounty")}</p>
            <p className="body-regular">California</p>
          </div>
        </div>

        <div className="mt-8">
          <Map latLng={latLng} setLatLng={setLatLng} />
        </div>
      </Card>
    </div>
  )
}

export default PropertyOverview
