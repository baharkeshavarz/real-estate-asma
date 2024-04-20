"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useMediaQuery } from "@uidotdev/usehooks";

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"
import NeighborhoodCard from "./neighborhood-card"

const NeighborhoodListing = () => {
  let isSmallDevice = false;
  if (typeof window !== 'undefined') {
    isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  }

  const neighborhoods = [
    {
      id: 1,
      title: "Land",
      count: 1550,
      img: "/assets/images/properties/property-1.jpg"
    },
    {
      id: 2,
      title: "Offices",
      count: 200,
      img: "/assets/images/properties/property-4.webp"
    },
    {
      id: 3,
      title: "Apartments",
      count: 166,
      img: "/assets/images/properties/property-3.jpg"
    },
    {
      id: 4,
      title: "Homes",
      count: 500,
      img: "/assets/images/properties/property-1.jpg"
    },
    {
      id: 5,
      title: "Villas",
      count: 6500,
      img: "/assets/images/properties/property-4.webp"
    },
    {
      id: 6,
      title: "Shopes",
      count: 400,
      img: "/assets/images/properties/property-6.webp"
    },
    {
      id: 7,
      title: "Buildings",
      count: 119,
      img: "/assets/images/properties/property-5.webp"
    }
  ]

  return (
    <div className="flex-center flex-col px-5">
      <div className="flex-center flex-col">
        <h1 className="sm:h1-bold h2-bold pb-2 pt-9"> Find your categories </h1>
        <h4 className="h5-bold pb-2 text-slate-400">
          Find your dream property with our listing
        </h4>
      </div>

      <div className="mx-auto grid w-full max-w-6xl pt-8">
        <Swiper
          slidesPerView={isSmallDevice ? 2 : 5}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction"
          }}
          navigation={true}
          modules={[Navigation]}
          className=""
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {neighborhoods.map(property => (
              <SwiperSlide key={property.id}>
                <NeighborhoodCard key={property.id} property={property} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default NeighborhoodListing
