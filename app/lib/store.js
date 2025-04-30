import { create } from "zustand";

export const useStore = create((set) => ({
  results: [],
  setResults: (newResult) =>
    set((state) => ({
      results: [...state.results, newResult],
    })),
}));
