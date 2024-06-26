"use client"

import { links } from "@/constants/navbar"
import Link from "next/link"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { LiaUserLockSolid } from "react-icons/lia"
import { useTranslations, useLocale } from "next-intl"

const Menus = () => {
  const [nav, setNav] = useState(false)
  const t = useTranslations()
  const lang = useLocale()
  return (
    <div className="nav flex w-full px-4 text-white">
      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="base-medium cursor-pointer px-4 capitalize text-gray-500 duration-200 hover:scale-105 hover:text-primary-500"
          >
            <Link href={`/${lang}/${link}`}>{t(`navbar.${title}`)}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="flex-center z-10 cursor-pointer gap-x-1 pr-4 text-gray-500 md:hidden"
      >
        <div className="rounded-full bg-primary-500 p-3">
          <LiaUserLockSolid size={18} />
        </div>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 mt-14 flex w-full flex-col items-center justify-center bg-white text-secondary-800">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="paragraph-regular cursor-pointer px-4 py-3 capitalize"
            >
              <Link onClick={() => setNav(!nav)} href={`/${lang}/${link}`}>
                {t(`navbar.${title}`)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Menus
