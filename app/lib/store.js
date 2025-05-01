import { create } from "zustand";

const initialState = {
  results: [],
};

export const useStore = create((set, get) => ({
  ...initialState,
  selectedResult: null,
  setResults: (newResult) =>
    set(() => ({
      results: newResult,
    })),
  reset: () => set(initialState),
}));
