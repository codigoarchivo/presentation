import Image from "next/image";
import { JacksonQuintero } from "@/components/ui/JacksonQuintero";
import { FindMeOn } from "@/components/ui/FindMeOn";
import { Download } from "@/components/ui/Download";
import { MyWeb } from "@/components/ui/MyWeb";
import { useAddressStore } from "@/store";
import { useEffect, useState } from "react";
import en from "../lang/en.json";
import es from "../lang/es.json";
import { MyJob } from "@/components/ui/MyJob";

export default function Home() {
  const [intl, setIntl] = useState<any>();
  const lang = useAddressStore((state) => state.lang);

  useEffect(() => {
    setIntl(lang === "en" ? en : es);
  }, [setIntl, lang]);

  return (
    <main>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-4 ">
          <JacksonQuintero
            locale={lang}
            intl={[
              intl?.["page.home.title1"],
              intl?.["page.home.title2"],
              intl?.["page.home.text1"],
            ]}
          />
          <div>
            <FindMeOn intl={[intl?.["page.home.title3"]]} />
          </div>
          <MyJob
            intl={[
              intl?.["page.home.title6"],
              intl?.["page.home.title7"],
              intl?.["page.home.title8"],
              intl?.["page.home.title9"],
              intl?.["page.home.title10"],
              intl?.["page.home.title11"],
              intl?.["page.home.title12"],
              intl?.["page.home.title13"],
              intl?.["page.home.title14"],
              intl?.["page.home.title15"],
            ]}
          />
          <Download
            locale={lang}
            intl={[
              intl?.["page.home.title4"],
              intl?.["page.home.text10"],
              intl?.["page.home.title5"],
            ]}
          />

          <MyWeb
            locale={lang}
            intl={[
              intl?.["page.home.text2"],
              intl?.["page.home.text3"],
              intl?.["page.home.text4"],
              intl?.["page.home.text5"],
              intl?.["page.home.text6"],
              intl?.["page.home.text7"],
              intl?.["page.home.text8"],
            ]}
          />
        </div>
      </div>
    </main>
  );
}
