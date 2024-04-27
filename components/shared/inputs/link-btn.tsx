import Link from "next/link"
import { IconType } from "react-icons"

interface LinkBtnProps {
  hrefLink?: string
  label: string
  classes?: string
  icon?: IconType
  iconSize?: number
}

const LinkBtn = ({
  hrefLink,
  label,
  icon: Icon,
  iconSize = 24,
  classes = ""
}: LinkBtnProps) => {
  return (
    <Link
      href={hrefLink || "#"}
      className={`btn group relative inline-flex items-center justify-start gap-x-3 overflow-hidden 
       rounded-lg px-2.5 py-2 transition-all hover:bg-white ${classes}`}
    >
      {Icon && (
        <Icon
          className="text-secondary-300 group-hover:text-white"
          size={iconSize}
        />
      )}
      <span
        className="absolute bottom-0 left-0 mb-9 ml-9 h-48 w-56 translate-x-full translate-y-full rounded bg-primary-900 transition-all
        duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0"
      ></span>
      <span className="relative w-full text-secondary-800 transition-colors duration-300 ease-in-out group-hover:text-white">
        {label}
      </span>
    </Link>
  )
}

export default LinkBtn
