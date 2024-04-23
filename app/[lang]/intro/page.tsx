import Image from "next/image"
import { Logo } from "@/components/layouts/Logo"
import { useTranslations } from "next-intl"

export default function Intro() {
  const t = useTranslations()
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex-center bg-ternary-500 shadow-xl sm:order-1 order-2">
        <div className="relative sm:h-[400px] h-[280px] w-[600px] p-10">
          <Image src="/assets/images/about.jpg" fill alt="Al Asma" />
        </div>
      </div>
      <div className="flex-center flex-col bg-secondary-100 sm:order-2 order-1">
        <Logo classes="pt-1" />
        <div className="flex-center flex-col text-center text-black/70">
          <h1 className="sm:h3-semibold paragragh-semibold pb-1 pt-2">{t("intro.mainMessage")}</h1>
          <h4 className="sm:body-regular small-medium text-secondary-800">
            {t("intro.subMessage")}
          </h4>
        </div>

        <div className="w-full space-y-5 px-5 py-2 md:px-24">
          <div className="flex w-full cursor-pointer flex-col rounded-md bg-white/80 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="relative h-[250px] w-full">
              <Image
                src="/assets/images/intro/united-arab-emirates.jpg"
                fill
                alt="united arab emirates"
                className="rounded-sm shadow-xl"
              />
            </div>
            <h4 className="body-medium py-1.5 text-center text-black">
              {t("intro.country1")}
            </h4>
          </div>
          <div className="flex cursor-pointer flex-col rounded-md bg-white/80 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
            <div className="relative h-[250px] w-full">
              <Image
                src="/assets/images/intro/oman.jpeg"
                fill
                alt="oman"
                className="rounded-sm shadow-xl"
              />
            </div>
            <h4 className="body-medium py-1.5 text-center text-black">
              {t("intro.country2")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
