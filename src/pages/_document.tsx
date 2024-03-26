import { Html, Head, Main, NextScript } from "next/document";
import { useAddressStore } from "@/store";

export default function Document() {
  const lang = useAddressStore((state) => state.lang);
  return (
    <Html lang={lang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
