import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  lang: "en" | "es";
  // Methods
  setLang: (lang: State["lang"]) => void;
}

export const useAddressStore = create<State>()(
  persist(
    (set, get) => ({
      lang: "en",
      setLang: (lang) => {
        set({ lang });
      },
    }),
    {
      name: "lang-storage",
    }
  )
);
