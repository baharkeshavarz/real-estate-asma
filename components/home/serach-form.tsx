import { HiSearch } from "react-icons/hi"
import { HiOutlineHome } from "react-icons/hi"
import { MdOutlinePriceChange } from "react-icons/md"

const SearchForm = () => {
  return (
    <div className="flex-between flex-col space-x-2 space-y-2 sm:flex-row sm:space-y-0">
      <div className="relative flex min-h-[56px] w-full items-center justify-center gap-1 rounded-xl bg-secondary-100 px-4">
        <HiSearch size={18} className="text-primary-800" />
        <input
          type="text"
          placeholder="Search globally"
          className="no-focus placeholder body-regular border-none bg-secondary-100 shadow-none outline-none"
        />
      </div>

      <div className="relative flex min-h-[56px] w-full items-center justify-center gap-1 rounded-xl bg-secondary-100 px-4">
        <HiOutlineHome size={18} className="text-primary-800" />
        <select className="block w-full rounded-lg border border-gray-100 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-secondary-100 focus:ring-secondary-100">
          <option selected>Choose a Category:</option>
          <option value="DE">Houses</option>
          <option value="US">Apartments</option>
          <option value="CA">Villas</option>
          <option value="FR">Office</option>
        </select>
      </div>

      <div className="relative flex min-h-[56px] w-full items-center justify-center gap-1 rounded-xl bg-secondary-100 px-4">
        <MdOutlinePriceChange size={18} className="text-primary-800" />
        <input
          type="text"
          placeholder="Min Price"
          className="no-focus placeholder body-regular border-none bg-secondary-100 text-gray-500 shadow-none outline-none"
        />
      </div>

      <div className="relative flex min-h-[56px] w-full items-center justify-center gap-1 rounded-xl bg-secondary-100 px-4">
        <MdOutlinePriceChange size={18} className="text-primary-800" />
        <input
          type="text"
          placeholder="Max Price"
          className="no-focus placeholder body-regular  border-none bg-secondary-100 text-gray-500 shadow-none outline-none"
        />
      </div>

      <button
        className="flex-center body-regular min-h-[56px] min-w-fit rounded-md bg-primary-500
                 px-6 py-2 text-base text-gray-700 transition-all duration-500 ease-in-out hover:bg-primary-900"
        onClick={() => {}}
        type="button"
      >
        <HiSearch size={22} />
        Search Now
      </button>
    </div>
  )
}

export default SearchForm
