import React from "react"
import { Metadata } from "next"
import { getDictionary } from "@/lib/locale"
import { LocalProps } from "@/types"
import Search from "@/components/layouts/Search"
import FeaturedProperties from "@/components/home/featured-properties"
import About from "@/components/home/about"
import NeighborhoodListing from "@/components/home/neighborhood-listing"

export const metadata: Metadata = {
  title: "Al Asma Home",
  description: ""
}

const Home = async ({ params: { lang } }: LocalProps) => {
  const { pages } = await getDictionary(lang)
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
