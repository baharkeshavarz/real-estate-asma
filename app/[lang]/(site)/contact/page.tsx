import Card from "@/components/common/card"
import LayoutWrapper from "@/components/layouts/layout-wrapper"
import { companyInfo } from "@/constants/general"
import React from "react"
import { HiMap } from "react-icons/hi"
import { HiOutlinePhone } from "react-icons/hi"
import { HiOutlineMailOpen } from "react-icons/hi"
import ContactForm from "./contact-form"
import { useTranslations } from "next-intl"
import { HiOutlineAnnotation } from "react-icons/hi"

const CopntactUs = () => {
  const t = useTranslations()
  return (
    <LayoutWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="contact-information flex flex-col gap-5 p-5">
          <h1 className="h2-bold py-2">{t("pages.contact.title")}</h1>
          <p className="text-secondary-800">{t("pages.contact.text")}</p>
          <div className="contact-info space-y-9">
            <div className="flex-start space-x-2">
              <HiMap size={46} className="text-primary-500" />
              <div className="flex flex-col space-y-1">
                <p className="body-regular">{t("forms.address")}</p>
                <p>{companyInfo.address}</p>
              </div>
            </div>

            <div className="flex-start space-x-2">
              <HiOutlinePhone size={46} className="text-primary-500" />
              <div className="flex flex-col space-y-1">
                <p className="body-regular">{t("forms.mobileNumber")}</p>
                <p dir="ltr">{companyInfo.phone}</p>
              </div>
            </div>

            <div className="flex-start space-x-2">
              <HiOutlineMailOpen size={46} className="text-primary-500" />
              <div className="flex flex-col space-y-1">
                <p className="body-regular">{t("forms.emailAddress")}</p>
                <p>{companyInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form p-3">
          <Card>
            <div className="flex flex-col gap-3">
              <div className="flex-between">
                <div>
                  <h1 className="h2-bold">{t("navbar.contact")}</h1>
                  <p className="pb-3 pt-1 text-secondary-800 sm:body-regular small-regular">
                    {t("pages.contact.response")}
                  </p>
                </div>

                <HiOutlineAnnotation size={46} className="text-primary-500" />
              </div>
              <ContactForm />
            </div>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default CopntactUs
