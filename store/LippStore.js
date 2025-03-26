import { create } from "zustand";

const useLippStore = create((set) => ({
  language: "EN",
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLippStore;
