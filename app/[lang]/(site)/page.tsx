import React from "react"
import { Metadata } from "next"
import Search from "@/components/layouts/Search"
import FeaturedProperties from "@/components/home/featured-properties"
import About from "@/components/home/about"
import NeighborhoodListing from "@/components/home/neighborhood-listing"

export const metadata: Metadata = {
  title: "Al Asma Home",
  description: ""
}

const Home = () => {
  return (
    <>
      <Search />
      <FeaturedProperties />
      <NeighborhoodListing />
      <About />
    </>
  )
}

export default Home
