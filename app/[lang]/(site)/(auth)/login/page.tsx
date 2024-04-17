import React from "react"
import { Metadata } from "next"
import { getDictionary } from "@/lib/locale"
import { LocalProps } from "@/types"
import Login from "."

export const metadata: Metadata = {
  title: "Al Asma Login",
  description: ""
}

const SignIn = async ({ params: { lang } }: LocalProps) => {
  const { pages } = await getDictionary(lang)
  return (
    <Login t={pages} />
  )
}

export default SignIn
