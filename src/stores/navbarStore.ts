import { create } from "zustand";

interface NavbarStore {
  active: boolean;
  logoActive: boolean;
  toggleNavbar: (active: boolean) => void;
  toggleLogo: (active: boolean) => void;
}

export const useNavbarStore = create<NavbarStore>()((set) => ({
  active: false,
  logoActive: true,
  toggleNavbar: (active) => set({ active }),
  toggleLogo: (logoActive) => set({ logoActive }),
}));
