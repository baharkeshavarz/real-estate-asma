import { create } from "zustand"

export const uselatlng = create(set => ({
  latlng: null,
  setlatlng: (newItem: any) => set({ latlng: newItem })
}))
