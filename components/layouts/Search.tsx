"use client"
import React, { useState } from "react"
import SearchForm from "../home/serach-form"
import { useTranslations } from "next-intl"

const Search = () => {
  const t = useTranslations()
  const [activeTab, setActiveTab] = useState("buy-home")

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }
  return (
    <div className="min-h-[600px] bg-main-slider p-6 text-white sm:p-0">
      <div className="flex-center flex-col text-center">
        <h1 className="h1-bold pb-3 pt-36">{t("pages.home.findHome")}</h1>
        <h4 className="h4-bold py-2">{t("pages.home.findHomeSubtitle")}</h4>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 justify-center">
        <div className="grid grid-cols-1">
          <ul
            className="mx-auto mt-10 inline-block w-full flex-wrap justify-center rounded-t-xl border-b bg-white p-4 text-center text-black sm:w-fit"
            id="myTab"
            role="tablist"
          >
            <li role="presentation" className="inline-block">
              <button
                className={`w-full rounded-md ${
                  activeTab === "buy-home" ? "bg-primary-500" : ""
                } body-regular px-6 py-2 text-base transition-all duration-500 ease-in-out`}
                onClick={() => handleTabClick("buy-home")}
                type="button"
                role="tab"
                aria-controls="buy-home"
                aria-selected={activeTab === "buy-home"}
              >
                {t("general.buy")}
              </button>
            </li>
            <li role="presentation" className="inline-block">
              <button
                className={`w-full rounded-md ${
                  activeTab === "sell-home" ? "bg-primary-500" : ""
                } body-regular px-6 py-2 text-base  transition-all duration-500 ease-in-out`}
                onClick={() => handleTabClick("sell-home")}
                type="button"
                role="tab"
                aria-controls="sell-home"
                aria-selected={activeTab === "sell-home"}
              >
                {t("general.sell")}
              </button>
            </li>
            <li role="presentation" className="inline-block">
              <button
                className={`w-full rounded-md ${
                  activeTab === "rent-home" ? "bg-primary-500" : ""
                } body-regular px-6 py-2 text-base  transition-all duration-500 ease-in-out`}
                onClick={() => handleTabClick("rent-home")}
                type="button"
                role="tab"
                aria-controls="rent-home"
                aria-selected={activeTab === "rent-home"}
              >
                {t("general.rent")}
              </button>
            </li>
          </ul>

          <div className="rounded-none bg-white p-6 text-black shadow-md md:rounded-xl">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
