import React from "react"
import { Metadata } from "next"
import { getDictionary } from "@/lib/locale"
import { LocalProps } from "@/types"

export const metadata: Metadata = {
  title: "Al Asma Home",
  description: ""
}

const Home = async ({ params: { lang } }: LocalProps) => {
  const { pages } = await getDictionary(lang)
  return (
    <>
      <div className="h-screen">
        main page
      </div>
    </>
  )
}

export default Home
