import { HiSearch } from "react-icons/hi"
import { HiOutlineHome } from "react-icons/hi"
import { MdOutlinePriceChange } from "react-icons/md"
import { useTranslations } from "next-intl"

const SearchForm = () => {
  const t = useTranslations()
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex-center min-h-[56px] rounded-xl bg-slate-50 px-2">
          <HiSearch size={18} className="text-primary-800" />
          <input
            type="text"
            placeholder={t("forms.searchGlobally")}
            className="no-focus placeholder body-regular border-none bg-slate-50 p-2.5 shadow-none outline-none"
          />
        </div>

        <div className="flex-center min-h-[56px] rounded-xl bg-slate-50 px-2">
          <HiOutlineHome size={18} className="text-primary-800" />
          <select className="rounded-lg border border-gray-100 bg-slate-50 p-2.5 text-sm text-secondary-800 focus:border-secondary-100 focus:ring-secondary-100">
            <option selected>{t("forms.chooseCategory")}</option>
            <option value="DE">Houses</option>
            <option value="US">Apartments</option>
            <option value="CA">Villas</option>
            <option value="FR">Office</option>
          </select>
        </div>

        <div className="flex-center min-h-[56px] rounded-xl bg-slate-50 px-2">
          <MdOutlinePriceChange size={18} className="text-primary-800" />
          <input
            type="text"
            placeholder={t("forms.minPrice")}
            className="no-focus placeholder body-regular border-none bg-slate-50 p-2.5 text-secondary-800 shadow-none outline-none"
          />
        </div>

        <div className="flex-center min-h-[56px] rounded-xl bg-slate-50 px-2">
          <MdOutlinePriceChange size={18} className="text-primary-800" />
          <input
            type="text"
            placeholder={t("forms.maxPrice")}
            className="no-focus placeholder body-regular border-none bg-slate-50 p-2.5 text-secondary-800 shadow-none outline-none"
          />
        </div>
      </div>

      <div className="flex-center mx-auto w-full py-4 sm:w-64">
        <button
          className="flex-center body-regular min-h-[56px] w-full rounded-md bg-primary-500
         px-2 py-2 text-base text-gray-700 transition-all duration-500 ease-in-out hover:bg-primary-900"
          onClick={() => {}}
          type="button"
        >
          <HiSearch size={22} />
          {t("pages.home.searchNow")}
        </button>
      </div>
    </>
  )
}

export default SearchForm
