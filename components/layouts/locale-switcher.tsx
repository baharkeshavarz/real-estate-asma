"use client"

import { usePathname } from "next/navigation"
import { humanReadableLanguage, supportedLanguages } from "@/i18n.config"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HiOutlineGlobeAlt } from "react-icons/hi"

interface LocaleSwitcherProps {
  classes?: string
}

const LocaleSwitcher = ({ classes }: LocaleSwitcherProps) => {
  const pathName = usePathname()
  const router = useRouter()
  const [selectedLang, setSelectedLang] = useState("")

  const redirectToLanguage = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    router.push(segments.join("/"))
  }

  const LangInfo = (locale: any) => {
    return (
      <>
        <Image
          src={`/assets/icons/flags/${locale}.svg`}
          width={21}
          height={21}
          alt={locale}
          className="mx-1 rounded-md"
        />
        {humanReadableLanguage(locale)}
      </>
    )
  }

  useEffect(() => {
    const segments = pathName.split("/")
    setSelectedLang(segments[1])
  }, [pathName])

  return (
    <div className={`flex-center mx-1 h-full ${classes}`}>
      <HiOutlineGlobeAlt size={20} />
      <select className="flex-start body-regular rounded-md bg-white p-2">
        {supportedLanguages.map(locale => (
          <option
            key={locale}
            value={selectedLang}
            onClick={() => redirectToLanguage(locale)}
            className="gap-y-1"
          >
            {LangInfo(locale)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LocaleSwitcher
