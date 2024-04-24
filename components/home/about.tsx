"use client"
import Image from "next/image"
import React from "react"
import { HiMiniPlay } from "react-icons/hi2"
import { HiCheck } from "react-icons/hi2"
import LinkBtn from "../shared/inputs/link-btn"
import { useTranslations } from "next-intl"

const About = () => {
  const t = useTranslations()
  return (
    <div className="container relative mt-16 lg:mt-24">
      <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative">
            <Image
              src="/assets/images/about.jpg"
              width={711}
              height={711}
              className="rounded-xl shadow-md"
              alt=""
            />
            <div className="absolute bottom-2/4 end-0 start-0 translate-y-2/4 text-center">
              <a
                href="#!"
                data-type="youtube"
                data-id="yba7hPeTSjk"
                className="lightbox dark:shadow-gyay-700 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-500 shadow-md dark:bg-slate-900"
              >
                <HiMiniPlay className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="lg:ms-4">
            <h4 className="mb-6 text-2xl font-semibold leading-normal md:text-3xl lg:leading-normal">
              {t("pages.about.title")}
            </h4>
            <p className="max-w-xl text-justify leading-[25px] text-secondary-800">
              {t("pages.about.comment")}
            </p>

            <h4 className="paragraph-semibold py-6">
              {t("pages.about.ourKeys")}
            </h4>
            <ul className="list-unstyled space-y-2 text-secondary-800">
              <li className="flex-start gap-1">
                <HiCheck /> {t("pages.about.key1")}
              </li>
              <li className="flex-start gap-1">
                <HiCheck /> {t("pages.about.key2")}
              </li>
              <li className="flex-start gap-1">
                <HiCheck /> {t("pages.about.key3")}
              </li>
              <li className="flex-start gap-1">
                <HiCheck /> {t("pages.about.key4")}
              </li>
              <li className="flex-start gap-1">
                <HiCheck /> {t("pages.about.key5")}
              </li>
            </ul>
            <div className="mt-4">
              <LinkBtn label={t("general.learnMore")} hrefLink="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
