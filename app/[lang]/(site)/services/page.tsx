import LayoutWrapper from "@/components/layouts/layout-wrapper"
import LinkBtn from "@/components/shared/inputs/link-btn"
import { companyInfo } from "@/constants/general"
import { useTranslations } from "next-intl"
import { HiOutlinePhone } from "react-icons/hi"
import { HiOutlineCheck } from "react-icons/hi"
import { GiReceiveMoney } from "react-icons/gi"
import { MdSupportAgent } from "react-icons/md"
import { PiMaskHappy } from "react-icons/pi"

const Services = () => {
  const t = useTranslations()
  return (
    <>
      <LayoutWrapper>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          <div className="flex-center flex-col">
            <div className="flex-center h-28 w-28 rounded-full bg-primary-500">
              <div className="flex-center h-20 w-20 cursor-pointer rounded-full bg-primary-800 p-2 transition-all duration-300 hover:scale-125 hover:bg-primary-300">
                <GiReceiveMoney className="text-secondary-500" size={80} />
              </div>
            </div>
            <h1 className="h3-semibold py-2 pt-5">
              {t("pages.services.service1")}
            </h1>
            <p className="body-regular py-2 text-center">
              {t("pages.services.service1Comment")}
            </p>
          </div>

          <div className="flex-center flex-col">
            <div className="flex-center h-28 w-28 rounded-full bg-primary-500">
              <div className="flex-center h-20 w-20 cursor-pointer rounded-full bg-primary-800 p-2 transition-all duration-300 hover:scale-125 hover:bg-primary-300">
                <MdSupportAgent className="text-secondary-500" size={80} />
              </div>
            </div>
            <h1 className="h3-semibold py-2 pt-5">
              {t("pages.services.service2")}
            </h1>
            <p className="body-regular py-2 text-center">
              {t("pages.services.service2Comment")}
            </p>
          </div>

          <div className="flex-center flex-col">
            <div className="flex-center h-28 w-28 rounded-full bg-primary-500">
              <div className="flex-center h-20 w-20 cursor-pointer rounded-full bg-primary-800 p-2 transition-all duration-300 hover:scale-125 hover:bg-primary-300">
                <PiMaskHappy className="text-secondary-500" size={80} />
              </div>
            </div>
            <h1 className="h3-semibold py-2 pt-5">
              {t("pages.services.service3")}
            </h1>
            <p className="body-regular py-2 text-center">
              {t("pages.services.service3Comment")}
            </p>
          </div>
        </div>
      </LayoutWrapper>

      <div className="w-full bg-secondary-100">
        <div className="mx-auto grid min-h-fit max-w-6xl grid-cols-1 p-6 sm:p-16 md:grid-cols-2">
          <div>
            <h1 className="h2-bold pt-2">{t("pages.services.helpTitle")}</h1>
            <p className="body-regular text-secondary-800">
              {t("pages.services.helpText")}
            </p>
          </div>
          <div className="flex-center mx-auto gap-x-1 gap-y-6 pt-10 sm:gap-x-6 sm:pt-0">
            <LinkBtn
              label={t("navbar.contact")}
              hrefLink="#"
              classes="border border-black body-regular h-12"
              icon={HiOutlineCheck}
            />
            <LinkBtn
              label={companyInfo.phone}
              hrefLink="#"
              classes="bg-primary-500 body-regular h-12"
              icon={HiOutlinePhone}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
