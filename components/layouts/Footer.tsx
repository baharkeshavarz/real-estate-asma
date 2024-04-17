import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex-between gap-x-20 bg-ternary-500">
      <div className="flex-start flex-col px-20 pt-5">
        <Logo />
        <div className="contact-info p-5 bg-red-500 w-full">
          <p className="text-white">Free Customer Care</p>
          <h6 className="text-secondary-100">
            <Link href="tel:+96896078881">+(96) 896078881</Link>
          </h6>
        </div>

        <div className="p-5 bg-yellow-500 w-full">
          <p className="text-white">Follow us on social media</p>
        </div>
      </div>

      <div className="flex-center">
        We are always ready to move our achievements to the next level We are
        constantly growing and we would like to keep pace with growth.
      </div>
    </div>
  )
}

export default Footer
