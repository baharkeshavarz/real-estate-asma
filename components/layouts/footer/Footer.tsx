import React from "react"
import { Logo } from "../Logo"
import { HiChevronRight } from "react-icons/hi2"
import Link from "next/link"
import NewsLetter from "./NewsLetter"
import { SocialMedia } from "./SocialMedia"
import { links } from "@/constants/navbar"
import { useTranslations } from "next-intl"
import { companyInfo } from "@/constants/general"

const Footer = () => {
  const t = useTranslations()
  return (
    <footer className="relative mt-44 bg-slate-900">
      <div className="container relative">
        <div className="grid grid-cols-1">
          <div className="relative py-16">
            <div className="relative w-full">
              <div className="relative -top-40 overflow-hidden rounded-xl bg-white px-6 py-10 shadow-lg lg:px-8">
                <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2">
                  <div className="z-1 text-center md:text-start">
                    <h3 className="md:paragraph-medium text-2xl font-medium leading-normal text-black md:leading-normal">
                      {t("newsletter.subscribe")}
                    </h3>
                    <p className="body-medium py-2 text-secondary-300">
                      {t("newsletter.subscribeMsg")}
                    </p>
                  </div>
                  <NewsLetter />
                </div>

                <div className="absolute -start-5 -top-5">
                  <div className="uil uil-envelope text-7xl text-black/5 ltr:-rotate-45 rtl:rotate-45 lg:text-[150px]"></div>
                </div>

                <div className="absolute -bottom-5 -end-5">
                  <div className="uil uil-pen rtl:-rotate-9 text-7xl text-black/5 lg:text-[150px]"></div>
                </div>
              </div>

              <div className="-mt-24 grid grid-cols-1 gap-[30px] md:grid-cols-12">
                <div className="md:col-span-12 lg:col-span-4">
                  <Link href="#" className="text-[22px] focus:outline-none">
                    <Logo />
                  </Link>
                  <p className="mt-6 text-gray-300">{t("footer.about")}</p>
                </div>

                <div className="md:col-span-4 lg:col-span-2">
                  <h5 className="font-semibold tracking-[1px] text-gray-100">
                    {t("footer.explore")}
                  </h5>
                  <ul className="footer-list body-regular mt-6 list-none">
                    {links.map(({ id, title, link }) => (
                      <li className="mt-[10px]" key={id}>
                        <Link
                          href={link}
                          className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                        >
                          <HiChevronRight /> {t(`navbar.${title}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 lg:col-span-3">
                  <h5 className="font-semibold tracking-[1px] text-gray-100">
                    {t("footer.usefullLinks")}
                  </h5>
                  <ul className="footer-list body-regular mt-6 list-none">
                    <li>
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight />
                        {t("footer.termsOfServices")}
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> {t("footer.faq")}
                      </Link>
                    </li>

                    <li className="mt-[10px]">
                      <Link
                        href="#"
                        className="flex-start text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        <HiChevronRight /> {t("footer.ourAgents")}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-4 lg:col-span-3">
                  <h5 className="font-semibold tracking-[1px] text-gray-100">
                    {t("footer.contactDetails")}
                  </h5>
                  <div className="mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-map-pin me-3 h-5 w-5 text-primary-500"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div className="body-regular">
                      <h6 className="mb-2 text-gray-300">Muscat, Oman</h6>
                      <Link
                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        data-type="iframe"
                        className="lightbox text-primary-500 duration-500 ease-in-out hover:text-primary-800"
                      >
                        {t("footer.viewGoogleMap")}
                      </Link>
                    </div>
                  </div>

                  <div className="body-regular mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail me-3 h-5 w-5 text-primary-500"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div className="">
                      <Link
                        href="mailto:info@alasmaproperties.com"
                        className="text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        {companyInfo.email}
                      </Link>
                    </div>
                  </div>

                  <div className="body-regular mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-phone me-3 h-5 w-5 text-primary-500"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div dir="ltr">
                      <Link
                        href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                        className="text-secondary-200 duration-500 ease-in-out hover:text-slate-400"
                      >
                        {companyInfo.phone}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 px-0 py-[30px]">
        <div className="container relative text-center">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="text-center md:text-start">
              <p className="mb-0 text-gray-300">
                © 2024 Al Asma {""} {t("footer.rights")}
              </p>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
