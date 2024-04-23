import { createSharedPathnamesNavigation } from "next-intl/navigation"

export const defaultLocale = "en" as const
export const locales = ["en", "ar"] as const
export const languages: Record<
  Locale,
  {
    label: string
    direction: string
  }
> = {
  en: {
    label: "English",
    direction: "ltr"
  },
  ar: {
    label: "Arabic",
    direction: "rtl"
  }
}

export type Locale = (typeof locales)[number]

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
