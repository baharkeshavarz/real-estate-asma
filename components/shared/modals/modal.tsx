"use client"

import { HiMiniXMark } from "react-icons/hi2"
import { useEffect, useState } from "react"

type ModalProps = {
  children: React.ReactNode
  setModalClose?: any
  open: boolean
  setModalOpen: any
  width?: string
}

const defaultWidth = "sm:w-[550px] w-full"

const Modal = ({
  children,
  setModalClose,
  open,
  width = defaultWidth
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open)
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const hanleClose = () => {
    setModalClose()
  }

  return (
    <>
      {isOpen && (
        <dialog className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
          <div className="m-auto max-h-[700px] overflow-y-scroll rounded-lg bg-white p-4">
            <div className={`flex flex-col items-center gap-4 p-2 ${width}`}>
              <div className="flex-end w-full p-0 pb-2">
                <button
                  onClick={hanleClose}
                  type="button"
                  className="flex-center rounded-md bg-black p-2 text-sm text-white transition-all delay-75 hover:bg-black/70"
                >
                  <HiMiniXMark />
                  Close
                </button>
              </div>
              <div className={`${defaultWidth} ${width}`}>
                {children}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
