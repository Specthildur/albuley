"use client";

import { create } from "zustand";

const useResultStore = create((set) => ({
  results: [],
  addResults: (result) => set(() => ({ results: result })),
}));
