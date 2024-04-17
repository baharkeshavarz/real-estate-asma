import "./globals.css"
import type { Metadata } from "next"
import { supportedLanguages } from "@/i18n.config"
import { Roboto, Noto_Sans_Arabic } from "next/font/google"
import { ChildrenLocalProps } from "@/types"
import ToastProvider from "@/providers/toast-provider"
import EmotionCache from "@/providers/emotion-cache"

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
  title: "Influous",
  description: "Influous App"
}

export async function generateStaticParams() {
  return supportedLanguages.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: ChildrenLocalProps) {
  const lang = params.lang.toString()
  
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={
          params.lang.toString() === "ar"
            ? noto_arabic.className
            : roboto.className
        }
      >
        <main>
            <ToastProvider />
            {lang === "ar" ? (
              <EmotionCache>{children}</EmotionCache>
            ) : (
              <> {children} </>
            )}
        </main>
      </body>
    </html>
  )
}
