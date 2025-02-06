import { create } from "zustand";

// Tipado del estado global
interface ModalDrawer {
  isActivated: boolean | null;
  setModal: (isActivated: boolean) => void;
}

// Crear el store
export const useModalDrawer = create<ModalDrawer>((set) => ({
  isActivated: null,
  setModal: (isActivated: boolean) => set({ isActivated }),
}));
