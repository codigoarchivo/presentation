import { useAddressStore } from "@/store";
import { lang } from "@/interface/lang";

export default function LocaleSwitcher() {
  const setLang = useAddressStore((state) => state.setLang);
  const lang = useAddressStore((state) => state.lang);

  const selectLang = (lang: lang) => {
    return lang === "en" ? "es" : "en";
  };

  const select = (lo: lang) => {
    setLang(selectLang(lo));
  };

  return (
    <p className="cursor-pointer" onClick={() => select(lang)}>
      {selectLang(lang)}
    </p>
  );
}
