import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Logtout from "../../auth/logtout"
import ShowCredit from "@/components/credit/show-credit"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import SettingsIcon from "@mui/icons-material/Settings"
import { usePathname } from "next/navigation"
import { findLocalFromUrl } from "@/lib/url"
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech"
import { ProfileData } from "@/types/index"
import PersonIcon from "@mui/icons-material/Person"

interface DropdownUserProps {
  t: any
  profileData: ProfileData | undefined
}

const DropdownUser = ({ t, profileData }: DropdownUserProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const lang = findLocalFromUrl(pathname)
  const trigger = useRef<any>(null)
  const dropdown = useRef<any>(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center"
        href="#"
      >
        <span className="h-12 w-12 rounded-full">
          <PersonIcon sx={{ width: "2.3rem", height: "2.3rem" }} />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark 
        ${dropdownOpen === true ? "block" : "hidden"}
        ${lang === "ar" ? "left-0" : "right-0"}`}
      >
        <ul className="flex flex-col gap-4 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href=""
              className="dark:border-strokedar flex items-center gap-3.5 border-b border-stroke py-1 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-[0.9rem]"
            >
              {profileData?.firstName && profileData?.lastName
                ? profileData?.firstName + " " + profileData?.lastName
                : null}
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="font-small flex items-center gap-3.5 text-sm duration-300 ease-in-out hover:text-primary"
            >
              <span className="flex gap-x-2">
                <MilitaryTechIcon color="warning" />
                {t.navigation.club}
              </span>
              <ShowCredit t={t.pages} showIcon={false} />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="font-small flex items-center gap-3.5 text-sm duration-300 ease-in-out hover:text-primary"
            >
              <AccountBoxIcon />
              {t.navigation.profile}
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="font-small flex items-center gap-3.5 text-sm duration-300 ease-in-out hover:text-primary"
            >
              <SettingsIcon />
              {t.navigation.settings}
            </Link>
          </li>
        </ul>
        <Logtout t={t} />
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
