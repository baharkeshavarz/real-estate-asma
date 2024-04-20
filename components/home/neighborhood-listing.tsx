"use client"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"
import NeighborhoodCard from "./neighborhood-card"

const NeighborhoodListing = () => {
  const neighborhoods = [
    {
      id: 1,
      title: "Dubai",
      count: 1550,
      img: "/assets/images/properties/property-1.jpg"
    },
    {
      id: 2,
      title: "Sharjeh",
      count: 200,
      img: "/assets/images/properties/property-4.webp"
    },
    {
      id: 3,
      title: "Al Ain",
      count: 166,
      img: "/assets/images/properties/property-3.jpg"
    },
    {
      id: 4,
      title: "Ajman",
      count: 500,
      img: "/assets/images/properties/property-1.jpg"
    },
    {
      id: 5,
      title: "Abu Dhabi",
      count: 6500,
      img: "/assets/images/properties/property-4.webp"
    },
    {
      id: 6,
      title: "London",
      count: 400,
      img: "/assets/images/properties/property-6.webp"
    },
    {
      id: 7,
      title: "London",
      count: 119,
      img: "/assets/images/properties/property-5.webp"
    }
  ]

  return (
    <div className="flex-center flex-col">
      <div className="flex-center flex-col text-center">
        <h1 className="h1-bold pb-2 pt-9"> Find your neighborhood </h1>
        <h4 className="h5-bold pb-2 text-slate-400">
          Find your dream apartment with our listing
        </h4>
      </div>

      <div className="mx-auto grid w-full max-w-6xl pt-8">
        <Swiper
          slidesPerView={5}
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
