"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { findLocalFromUrl } from "@/lib/url"

interface LogoProps {
  name?: string
  classes?: string
}

const Logo = ({ name = "logo.png", classes = "w-24 h-12" }: LogoProps) => {
  const pathname = usePathname()
  const lang = findLocalFromUrl(pathname)

  return (
    <div className={`relative mx-auto flex justify-center ${classes}`}>
      <Link href={`/${lang}/dashboard/requests/information`}>
        <Image
          src={`/next-assets/images/${name}`}
          alt=""
          fill={true}
          className="object-fill shadow"
        />
      </Link>
    </div>
  )
}

export default Logo
