"use client"

import { useModalStore } from "@/store/modalStore"
import { LiaUserLockSolid } from "react-icons/lia"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "./locale-switcher"

export const UserAccess = () => {
  const { openModal } = useModalStore()
  const t = useTranslations()
  return (
    <>
      <div className="sm:flex-center base-medium hidden min-w-fit gap-x-1 px-2">
        <LiaUserLockSolid size={18} />
        <span
          className="cursor-pointer capitalize text-gray-500 duration-200 hover:text-primary-500"
          onClick={openModal}
        >
          {t("general.login")}
        </span>
        /
        <span className="cursor-pointer capitalize text-gray-500 duration-200 hover:text-primary-500">
          {t("general.register")}
        </span>
      </div>
      <LocaleSwitcher />
    </>
  )
}
