// src/store/useModalStore.ts
import { create } from "zustand";

type ModalStore = {
  hasSeenModal: boolean;
  setHasSeenModal: (seen: boolean) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  hasSeenModal: false,
  setHasSeenModal: (seen) => set({ hasSeenModal: seen }),
}));
