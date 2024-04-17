import { LiaUserLockSolid } from "react-icons/lia"

export const UserAccess = () => {
  return (
    <>
      <div className="flex-center base-medium min-w-[10rem] gap-x-1">
        <LiaUserLockSolid size={18} />
        <span className="cursor-pointer capitalize text-gray-500 duration-200 hover:text-primary-500">
          Login
        </span>
        /
        <span className="cursor-pointer capitalize text-gray-500 duration-200 hover:text-primary-500">
          Register
        </span>
      </div>
      <button className="body-regular hidden h-12 w-80 rounded-md bg-primary-500 hover:text-secondary-800 md:flex-center">
        Book Your Property
      </button>
    </>
  )
}
