import { create } from "zustand";
import { ReactNode } from "react";

// Tipado del estado global
interface Modal {
  isActivated: boolean | null;
  modalTitle: string | null;
  modalBody: ReactNode | null;
  hasButtons: boolean | null;
  buttonTitle: string | null;
  buttonAction: (() => void) | null;
  setModal: (
    isActivated: boolean,
    modalTitle?: string,
    hasButtons?: boolean,
    modalBody?: ReactNode,
    buttonTitle?: string,
    buttonAction?: () => void
  ) => void;
}

// Crear el store
export const useModal = create<Modal>((set) => ({
  isActivated: null,
  modalTitle: null,
  modalBody: null,
  hasButtons: null,
  buttonTitle: null,
  buttonAction: null,
  setModal: (
    isActivated,
    modalTitle,
    hasButtons,
    modalBody = null,
    buttonTitle,
    buttonAction = undefined
  ) =>
    set({
      isActivated,
      modalTitle,
      hasButtons,
      modalBody,
      buttonTitle,
      buttonAction,
    }),
}));
