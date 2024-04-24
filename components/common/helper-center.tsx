import React from "react"
import { HiOutlinePhone } from "react-icons/hi"
import { useTranslations } from "next-intl"

const HelperCenter = () => {
  const t = useTranslations()
  return (
    <div className="flex flex-col pt-5 text-black">
      <p className="paragraph-medium text-center">
        {t("property.haveQuestion")}
      </p>
      <div className="pt-3">
        <button
          type="submit"
          className="body-regular flex-center group w-full gap-x-2 rounded-lg border border-primary-800 p-2 text-primary-800 hover:bg-primary-500 hover:text-secondary-800"
        >
          <HiOutlinePhone
            size={18}
            className="text-primary-800 group-hover:text-secondary-800"
          />
          {t("navbar.contact")}
        </button>
      </div>
    </div>
  )
}

export default HelperCenter
