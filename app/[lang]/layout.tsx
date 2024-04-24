import "./globals.css"
import type { Metadata } from "next"
import { Roboto, Noto_Sans_Arabic } from "next/font/google"
import { ChildrenLocalProps } from "@/types"
import ToastProvider from "@/providers/toast-provider"
import EmotionCache from "@/providers/emotion-cache"
import ModalProvider from "@/providers/modal-provider"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { Locale, languages } from "@/navigation"
import { unstable_setRequestLocale } from "next-intl/server"

// Handle the font family
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  variable: "--font-roboto"
})
const noto_arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-notoSansArabic"
})

export const metadata: Metadata = {
  title: "Al Asma",
  description: "Al Asma App"
}

// export  function generateStaticParams() {
//   return supportedLanguages.map(locale => ({ lang: locale }))
// }

export default function RootLayout({ children, params }: ChildrenLocalProps) {
  const lang = params.lang.toString()
  const messages = useMessages()
  unstable_setRequestLocale(params.lang)
  return (
    <html
      lang={lang}
      dir={languages[params.lang as Locale]?.direction ?? "ltr"}
    >
      <body
        className={
          params.lang.toString() === "ar"
            ? noto_arabic.className
            : roboto.className
        }
      >
        <main>
          <NextIntlClientProvider messages={messages} locale={params.lang}>
            <ToastProvider />
            <ModalProvider />
            {lang === "ar" ? (
              <EmotionCache>{children}</EmotionCache>
            ) : (
              <> {children} </>
            )}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}
