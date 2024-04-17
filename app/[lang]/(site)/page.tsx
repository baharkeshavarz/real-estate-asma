import React from "react"
import { Metadata } from "next"
import { getDictionary } from "@/lib/locale"
import { LocalProps } from "@/types"
import Search from "@/components/layouts/Search"

export const metadata: Metadata = {
  title: "Al Asma Home",
  description: ""
}

const Home = async ({ params: { lang } }: LocalProps) => {
  const { pages } = await getDictionary(lang)
  return (
    <>
      <div className="h-screen">
         <Search/>
      </div>
    </>
  )
}

export default Home
