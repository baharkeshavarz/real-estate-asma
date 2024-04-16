"use client"

import React, { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Logo from "../logo"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import GridViewIcon from "@mui/icons-material/GridView"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff"
import ImportContactsIcon from "@mui/icons-material/ImportContacts"
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert"
import MessageIcon from "@mui/icons-material/Message"
import { findLocalFromUrl } from "@/lib/url"
import SettingsIcon from "@mui/icons-material/Settings"
import SidebarLinkGroup from "./sidebar-link-group"
import WalletIcon from "@mui/icons-material/Wallet"
import ShowCredit from "@/components/credit/show-credit"
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech"
import { ProfileData } from "@/types/index"
import profileServices from "@/services/profile"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import CreditScoreIcon from "@mui/icons-material/CreditScore"
import { commaSep } from "@/components/common/inputs/helper"
import { useCurrencyStore } from "@/store/currencyStore"
import { getCurrenciesList } from "@/actions/get-currencies"
import { CurrencyItem } from "@/types/currency"

interface SidebarProps {
  t: any
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
  profileData: ProfileData | undefined
}
interface WalletData {
  currency: string
  balance: number
  title: string
}

const Sidebar = ({
  t,
  sidebarOpen,
  setSidebarOpen,
  profileData
}: SidebarProps) => {
  const pathname = usePathname()
  const lang = findLocalFromUrl(pathname)
  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)
  const [walletData, setWalletData] = useState<Array<WalletData>>([])
  const { currencies, setCurrencies } = useCurrencyStore()
  const { getWalletList } = profileServices
  let storedSidebarExpanded = "true"

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return
      setSidebarOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded")
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded")
    }
  }, [sidebarExpanded])

  const getWalletData = async () => {
    const res = await getWalletList()
    if (res.data.succeed) {
      setWalletData(res.data.value)
    }
  }
  useEffect(() => {
    getWalletData()
  }, [])

  const loadCurrencyList = async () => {
    if (!currencies.length) {
      const currenciesData = await getCurrenciesList()
      setCurrencies(currenciesData)
    }
  }

  useEffect(() => {
    loadCurrencyList()
  }, [])

  const findCurrencyLabel = (wallerCurreny: number) => {
    // Find the curreny
    let currency: CurrencyItem | undefined = currencies.find(
      (cItem: CurrencyItem) => cItem.id === Number(wallerCurreny)
    )
    const currencyLabel: string = currency
      ? (currency as CurrencyItem).sign
      : ""
    return currencyLabel
  }

  return (
    <aside
      ref={sidebar}
      className={`w-68 ease-lineardark:bg-boxdark absolute left-0 top-0 z-9999 flex h-screen flex-col
       overflow-y-hidden bg-black duration-300 lg:static lg:translate-x-0 ${
         sidebarOpen ? "translate-x-0" : "-translate-x-full"
       }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between bg-white px-4 py-2 shadow-2 md:px-6 2xl:px-11">
        <Logo classes="sm:w-20 w-12 h-12" />
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Club --> */}
              <li>
                <Link
                  href={`/${lang}/dashboard/requests/information`}
                  className={`group relative flex items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <span>
                    <MilitaryTechIcon color="warning" />
                    {t.navigation.club}
                  </span>
                  <ShowCredit t={t.pages} showIcon={false} />
                </Link>
              </li>
              {/* <!-- Menu Item Club --> */}

              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  href={`/${lang}/dashboard/requests/information`}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("calendar") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <GridViewIcon />
                  {t.navigation.dashboard}
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Requests --> */}
              <li>
                <Link
                  href={`/${lang}/dashboard/requests`}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <CreditScoreIcon />
                  {t.navigation.getCredit}
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Wallert --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("wallet")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" || pathname.includes("wallet")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={e => {
                          e.preventDefault()
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true)
                        }}
                      >
                        <WalletIcon />
                        {t.navigation.wallet}
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-2 flex flex-col gap-2 pl-3">
                          {walletData.map((x: any) => (
                            <li>
                              <Link
                                href="/"
                                className={`font-small group relative flex items-center justify-between rounded-md px-1 pb-2 text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                  pathname === "/" && "text-white"
                                }`}
                              >
                                <span className="text-[0.8rem]">{x.title}</span>
                                <span className="text-[0.7rem]">
                                  {commaSep(x.balance + "")}{" "}
                                  {findCurrencyLabel(x.currency)}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Walle --> */}

              {/* <!-- Menu Item Purchase --> */}
              <li>
                <Link
                  href={`/${lang}/dashboard/purchase/orders`}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <ShoppingCartIcon />
                  {t.navigation.purchase}
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <AccountBoxIcon />
                  {t.navigation.profile}
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Transactions --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <FormatListNumberedIcon />
                  {t.navigation.transactions}
                </Link>
              </li>
              {/* <!-- Menu Item Transactions --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <SettingsIcon />
                  {t.navigation.settings}
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}

              {/* <!-- Menu Item History --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <HistoryToggleOffIcon />
                  {t.navigation.history}
                </Link>
              </li>
              {/* <!-- Menu Item History --> */}

              {/* <!-- Menu Item Addresses --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <ImportContactsIcon />
                  {t.navigation.addresses}
                </Link>
              </li>
              {/* <!-- Menu Item Addresses --> */}

              {/* <!-- Menu Item Alters --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <CrisisAlertIcon />
                  {t.navigation.alters}
                </Link>
              </li>
              {/* <!-- Menu Item Alters --> */}

              {/* <!-- Menu Item Messages --> */}
              <li>
                <Link
                  href=""
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("settings") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <MessageIcon />
                  {t.navigation.messages}
                </Link>
              </li>
              {/* <!-- Menu Item Messages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar
