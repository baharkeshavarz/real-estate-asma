"use client"

import Card from "@/components/common/card"
import { PropertyItem } from "@/types/property"
import OverviewTitle from "./overview-title"
import { useState } from "react"
import dynamic from "next/dynamic"
import Loader from "@/components/common/loading/loader"

interface PropertyOverviewProps {
  property: PropertyItem
}

const PropertyOverview = ({ property }: PropertyOverviewProps) => {
  const [latLng, setLatLng] = useState({
    lat: "21.100901",
    lng: "57.276123"
  })

  const Map = dynamic(() => import("@/components/common/map-js"), {
    loading: () => <Loader/>,
    ssr: false
  })
  return (
    <div className="flex-start flex-1 flex-col">
      <Card>
        <OverviewTitle title="Property Description" />
        <div className="body-regular py-2 text-justify text-secondary-800">
          {property.description}
        </div>
      </Card>

      <Card>
        <OverviewTitle title="Property details" />
        <div className="grid grid-cols-1 gap-x-9 gap-y-4 px-2 pt-4 sm:grid-cols-2">
          <div className="flex-between">
            <p className="base-medium">Property ID</p>
            <p className="body-regular">RT48</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Price</p>
            <p className="body-regular">$252,000</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Property Size</p>
            <p className="body-regular">1500 Sq Ft</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Bathrooms</p>
            <p className="body-regular">3</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Bedrooms</p>
            <p className="body-regular">2</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Garage</p>
            <p className="body-regular">2</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Garage Size</p>
            <p className="body-regular">200 SqFt</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Year Built</p>
            <p className="body-regular">2022</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Property Type</p>
            <p className="body-regular">Apartment</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">Property Status</p>
            <p className="body-regular">For Sale</p>
          </div>
        </div>
      </Card>

      <Card>
        <OverviewTitle title="Featured" />
      </Card>

      <Card>
        <OverviewTitle title="Address" />
        <div className="space-y-3 pt-4">
          <div className="flex-between">
            <p className="base-medium">Address</p>
            <p className="body-regular">10425 Tabor St</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">City</p>
            <p className="body-regular">Los Angeles</p>
          </div>

          <div className="flex-between">
            <p className="base-medium">State/county</p>
            <p className="body-regular">California</p>
          </div>
        </div>
        <div className="mt-8">
          <Map latLng={latLng} setLatLng={setLatLng} />
        </div>
      </Card>

      <Card>
        <OverviewTitle title="Video" />
      </Card>
    </div>
  )
}

export default PropertyOverview
