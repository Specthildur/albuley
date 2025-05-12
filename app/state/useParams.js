import { create } from "zustand";

export const useParam = create((set) => ({
  param: "all",
  setSearch: (newParamSearch) => set(() => ({ param: newParamSearch }, true)),
}));
