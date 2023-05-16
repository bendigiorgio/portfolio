import { create } from "zustand";

interface NavbarStore {
  active: boolean;
  setState: (active: boolean) => void;
}

export const useNavbarStore = create<NavbarStore>()((set) => ({
  active: false,
  setState: (active) => set({ active }),
}));
