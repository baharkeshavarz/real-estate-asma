"use client"

import { useModalStore } from "@/store/modalStore"
import { LiaUserLockSolid } from "react-icons/lia"
import Modal from "../shared/modals/modal"
import UserDataForm from "../common/user-data-form"

export const UserAccess = () => {
  const { openModal } = useModalStore();
  
  return (
    <>
      <div className="sm:flex-center base-medium hidden min-w-[10rem] gap-x-1">
        <LiaUserLockSolid size={18} />
        <span className="cursor-pointer capitalize text-gray-500 duration-200 hover:text-primary-500">
          Login
        </span>
        /
        <span className="cursor-pointer capitalize text-gray-500 duration-200 hover:text-primary-500">
          Register
        </span>
      </div>
      <button
        onClick={openModal}
        className="body-regular md:flex-center hidden h-12 w-80 rounded-md bg-primary-900 hover:text-secondary-800"
      >
        Book Your Property
      </button>
    </>
  )
}
