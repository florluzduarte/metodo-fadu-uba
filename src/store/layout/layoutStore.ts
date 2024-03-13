import { create } from "zustand";

interface LayoutStore {
  isMenuOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

export const useLayoutStore = create<LayoutStore>()((set) => ({
  isMenuOpen: false,
  handleOpenMenu: () => set({ isMenuOpen: true }),
  handleCloseMenu: () => set({ isMenuOpen: false })
}));