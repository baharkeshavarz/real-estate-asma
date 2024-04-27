import "./globals.css"
import type { Metadata } from "next"
import { ChildrenLocalProps } from "@/types"
import ToastProvider from "@/providers/toast-provider"
import EmotionCache from "@/providers/emotion-cache"
import ModalProvider from "@/providers/modal-provider"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { Locale, languages } from "@/navigation"
import { userAgent } from "next/server"
import { headers } from "next/headers"
import AppProvider from "@/providers/app-provider"
import localFont from "@next/font/local"

// Handle the font family
const poppins = localFont({
  src: [
    {
      path: "../../public/assets/fonts/poppins/Poppins-Regular.ttf",
      weight: "400"
    },
    {
      path: "../../public/assets/fonts/poppins/Poppins-Bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-poppins"
})

const notoSansArabic = localFont({
  src: [
    {
      path: "../../public/assets/fonts/noto-sans/NotoSansArabic-Regular.ttf",
      weight: "400"
    },
    {
      path: "../../public/assets/fonts/noto-sans/NotoSansArabic-Bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-notoSansArabic"
})

export const metadata: Metadata = {
  title: "Al Asma",
  description: "Al Asma App"
}

export default function RootLayout({ children, params }: ChildrenLocalProps) {
  const lang = params.lang.toString()
  const messages = useMessages()
  const reqUserAgent = userAgent({ headers: headers() })
  return (
    <html
      lang={lang}
      dir={languages[params.lang as Locale]?.direction ?? "ltr"}
    >
      <body
        className={
          params.lang.toString() === "ar"
            ? notoSansArabic.className
            : poppins.className
        }
      >
        <main>
          <NextIntlClientProvider messages={messages} locale={params.lang}>
            <ToastProvider />
            <ModalProvider />
            <AppProvider userAgent={reqUserAgent}>
              {lang === "ar" ? (
                <EmotionCache>{children}</EmotionCache>
              ) : (
                <> {children} </>
              )}
            </AppProvider>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}
