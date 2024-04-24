import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

const NewsLetter = () => {
  const t = useTranslations()
  const lang = useLocale();
  return (
    <div className="subcribe-form z-1 py-6 md:py-0">
      <form className="relative max-w-lg md:ms-auto">
        <input
          type="email"
          id="subcribe"
          name="email"
          className="no-focus absolute w-full rounded-full bg-white p-3 shadow outline-none body-regular text-secondary-800"
          placeholder={t("newsletter.enterEmail")}
        />
        <button
          type="submit"
          className={`btn body-regular absolute ${lang === "ar" ? "left-0" : "right-0"} 
                      rounded-full bg-primary-500 p-3 text-secondary-800 hover:bg-primary-800
                    `}
        >
          {t("newsletter.subscribeBtn")}
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
