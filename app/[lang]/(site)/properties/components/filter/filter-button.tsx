"use client"
import { HiSearch } from "react-icons/hi"
import { GrPowerReset } from "react-icons/gr";
import Link from "next/link";

const FilterButton = () => {
  return (
    <div className="flex flex-col">
     <button
        className="flex-center body-regular min-h-[52px] w-full rounded-md bg-primary-500
                 px-2 py-2 text-base text-white transition-all duration-500 ease-in-out hover:bg-primary-900"
        onClick={() => {}}
        type="button"
      >
        <HiSearch size={22} />
        Search
      </button>

      <div className="flex-start space-x-1 pt-5">
         <GrPowerReset/>
         <Link href="#">
            <span className="underline body-regular">Reset all filters</span>
         </Link>
      </div>
    </div>
  )
}

export default FilterButton
