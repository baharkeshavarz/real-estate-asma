"use client"

import LayoutWrapper from "@/components/layouts/layout-wrapper"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Link from "next/link"

const ErrorPage = () => {
  const t = useTranslations()
  return (
    <LayoutWrapper>
      <div className="flex-center flex-col p-5">
        <div className="relative mx-auto h-[280px] w-full p-10 sm:h-[400px] sm:w-[480px]">
          <Image
            src="/assets/images/404-error.jpg"
            fill
            alt={t("error404.imageAlt")}
          />
        </div>

        <h1 className="sm:h2-bold h3-bold pb-2 pt-9">{t("error404.title")}</h1>
        <p className="pb-10 text-center">{t("error404.description")}</p>

        <Link
          className="flex-center body-regular min-h-[52px] w-64 rounded-md bg-primary-500
                     px-2 py-2 text-base text-white transition-all duration-500 ease-in-out hover:bg-primary-900"
          href="/"
        >
          {t("error404.backHome")}
        </Link>
      </div>
    </LayoutWrapper>
  )
}

export default ErrorPage
