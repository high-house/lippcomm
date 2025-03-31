import { create } from "zustand";

const useLippStore = create((set) => ({
  language: "EN",
  blog:{},
  setBlog:(post)=>set({blog:post}),
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLippStore;
