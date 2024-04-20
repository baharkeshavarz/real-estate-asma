import { create } from "zustand"
import { persist } from "zustand/middleware"

export type modalStore = {
  isOpen: false,
  openModal: () => void,
  closeModal:  () => void,
}

export const useModalStore = create(
  persist(
    (set: any) => ({
      isOpen: false,
      openModal: () => set({ isOpen: true }),
      closeModal: () => set({ isOpen: false })
    }),
    {
      name: "modal"
    }
  )
)
